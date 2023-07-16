"use client";

import { CardCharacter } from "@/components/contexts/caracters/card-character";
import { HandleError } from "@/components/structure/handle-error/handle-error";
import { Loading } from "@/components/structure/loading/loading";
import { Character } from "@/models/Character";
import { GET_EPISODE_BY_ID } from "@/querys/episodes";
import { useQuery } from "@apollo/client";
import { useParams } from "next/navigation";

export default function Page() {
  const { id } = useParams();

  const { data, loading, error } = useQuery(GET_EPISODE_BY_ID, {
    variables: {
      id,
    },
  });

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <HandleError />;
  }

  return (
    <main className="container m-auto md:p-8 sm:p-4">
      <div className="px-4 sm:px-0">
        <h1 className="text-2xl font-semibold leading-7 text-gray-900">
          {data?.episode.name}
        </h1>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
            <dt className=" text-sm font-medium leading-6 text-gray-900">
              Data de exibição
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {new Date(data.episode.air_date).toLocaleDateString()}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Episódio
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {data.episode.episode}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Personagens do Episódio
            </dt>
            <dd className="mt-2 text-sm text-gray-900 sm:col-span-4  sm:mt-0 flex flex-wrap flex-row gap-4">
              {data.episode.characters.map((character: Character) => {
                return (
                  <CardCharacter key={character.id} character={character} />
                );
              })}
            </dd>
          </div>
        </dl>
      </div>
    </main>
  );
}
