"use client";

import { Episode } from "@/models/Episode";
import { GET_ALL_EPISODES } from "@/querys/episodes";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import arrowNext from "@/assets/images/right-next-.svg";

import arrowPrevious from "@/assets/images/left-arrow.svg";

export function Episodes() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();

  const { data, loading } = useQuery(GET_ALL_EPISODES, {
    variables: {
      page: currentPage,
    },
  });

  useEffect(() => {
    if (data) {
      setTotalPages(data?.episodes?.info.pages);
    }
  }, [data]);

  const handleNextPage = useCallback(() => {
    setCurrentPage(currentPage + 1);
  }, [currentPage]);

  const handlePreviousPage = useCallback(() => {
    setCurrentPage(currentPage - 1);
  }, [currentPage]);

  if (loading) {
    return (
      <div className="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2 ">
        <div className="border-t-transparent border-solid animate-spin rounded-full border-blue-400 border-4 h-24 w-24"></div>
      </div>
    );
  }

  return (
    <main className="container m-auto md:p-8 sm:p-8 p-16">
      <ul role="list" className="divide-y divide-gray-100">
        {data.episodes.results.map((episode: Episode) => (
          <li
            key={episode.id}
            className="flex justify-between gap-x-6 px-4 py-2 hover:bg-gray-100 rounded-lg "
          >
            <div className="flex gap-x-4">
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {episode.name}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  {new Date(episode.air_date).toLocaleDateString()}
                </p>
              </div>
            </div>

            <div className="flex flex-row items-center gap-6">
              <button className="flex flex-col items-center justify-center gap-1">
                <svg
                  className="w-8 h-5"
                  viewBox="0 0 36 36"
                  enable-background="new 0 0 32 32"
                  id="Editable-line"
                  version="1.1"
                  fill={"red"}
                  stroke={"transparent"}
                >
                  <path
                    d="  M16.842,3.548l3.29,6.984c0.137,0.29,0.401,0.491,0.707,0.538l7.357,1.12c0.77,0.117,1.077,1.108,0.52,1.677l-5.324,5.436  c-0.221,0.226-0.322,0.551-0.27,0.87l1.257,7.676c0.131,0.803-0.673,1.416-1.362,1.036l-6.58-3.624c-0.273-0.151-0.6-0.151-0.873,0  l-6.58,3.624c-0.688,0.379-1.493-0.233-1.362-1.036l1.257-7.676c0.052-0.319-0.049-0.644-0.27-0.87l-5.324-5.436  c-0.557-0.569-0.25-1.56,0.52-1.677l7.357-1.12c0.306-0.047,0.57-0.248,0.707-0.538l3.29-6.984  C15.503,2.817,16.497,2.817,16.842,3.548z"
                    id="XMLID_16_"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    stroke-width="2"
                  />
                </svg>
                <span className="text-xs leading-5 text-gray-500">
                  Favoritar
                </span>
              </button>
              <button className="flex flex-col items-center justify-center gap-1">
                <svg
                  fill={"red"}
                  stroke={"transparent"}
                  viewBox="0 0 24 24"
                  className="w-8 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <span className="text-xs leading-5 text-gray-500">Assisti</span>
              </button>
              <div>
                <p className="text-xs leading-6 text-gray-900">{`${episode.characters.length} Person.`}</p>
                <div className="mt-1 flex items-center gap-x-1.5">
                  <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </div>
                  <p className="text-xs leading-5 text-gray-500">{`${episode.episode}`}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="w-full flex gap-4 justify-center items-center">
        {currentPage > 1 ? (
          <button
            type="button"
            disabled={currentPage - 1 < 1}
            onClick={handlePreviousPage}
            className="p-4 rounded-full hover:bg-gray-100 hover:border hover:border-gray-200"
          >
            <Image
              width={12}
              height={12}
              src={arrowPrevious}
              alt="Seta para esquerda"
            />
          </button>
        ) : (
          <div className="w-11 h-11" />
        )}

        <span className="text-sm leading-8 text-gray-500">{currentPage}</span>

        {currentPage !== totalPages ? (
          <button
            type="button"
            disabled={currentPage === totalPages}
            onClick={handleNextPage}
            className="p-4 rounded-full hover:bg-gray-100 hover:border hover:border-gray-200"
          >
            <Image
              width={12}
              height={12}
              src={arrowNext}
              alt="Seta para direita"
            />
          </button>
        ) : (
          <div className="w-11 h-11" />
        )}
      </div>
    </main>
  );
}
