"use client";

import { EmptyData } from "@/components/structure/empty-data";
import { ItemList } from "@/components/structure/item-list/item-list";
import { EpisodesContext } from "@/contexts/episodes.context";
import { Episode } from "@/models/Episode";
import { useContext } from "react";

export default function WatchedEpisodes() {
  const { watchedEpisodes } = useContext(EpisodesContext);

  if (watchedEpisodes.length < 1) {
    return <EmptyData />;
  }

  return (
    <main className="container m-auto md:p-8 sm:p-8 p-16">
      <ul role="list" className="divide-y divide-gray-100">
        {watchedEpisodes.map((episode: Episode) => (
          <ItemList key={episode.id} episode={episode} />
        ))}
      </ul>
    </main>
  );
}
