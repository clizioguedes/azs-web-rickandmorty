"use client";

import { EpisodeList } from "@/components/contexts/episodes/item-list";
import { EmptyData } from "@/components/structure/empty-data";
import { EpisodesContext } from "@/contexts/episodes.context";
import { Episode } from "@/models/Episode";
import { useContext } from "react";

export default function WatchedEpisodes() {
  const { watchedEpisodes } = useContext(EpisodesContext);

  if (watchedEpisodes.length < 1) {
    return <EmptyData title="Não exitem episódios assistidos no momento" />;
  }

  return (
    <main className="container m-auto p-8 lg:p-16">
      <div className="w-full flex items-center justify-center">
        <h1 className="font-semibold">Episódios Assistidos</h1>
      </div>
      <ul role="list" className="divide-y divide-gray-100">
        {watchedEpisodes.map((episode: Episode) => (
          <EpisodeList key={episode.id} episode={episode} />
        ))}
      </ul>
    </main>
  );
}
