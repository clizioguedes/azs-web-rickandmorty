"use client";

import { EpisodeList } from "@/components/contexts/episodes/item-list";
import { EmptyData } from "@/components/structure/empty-data";
import { EpisodesContext } from "@/contexts/episodes.context";
import { Episode } from "@/models/Episode";
import { useContext } from "react";

export default function FavoriteEpisodes() {
  const { favoriteEpisodes } = useContext(EpisodesContext);

  if (favoriteEpisodes.length < 1) {
    return <EmptyData title="Não existem episódios favoritos" />;
  }

  return (
    <main className="container m-auto md:p-8 sm:p-8 p-16">
      <div className="w-full flex items-center justify-center">
        <h1 className="font-semibold">Episódios Favoritos</h1>
      </div>
      <ul role="list" className="divide-y divide-gray-100">
        {favoriteEpisodes.map((episode: Episode) => (
          <EpisodeList key={episode.id} episode={episode} />
        ))}
      </ul>
    </main>
  );
}
