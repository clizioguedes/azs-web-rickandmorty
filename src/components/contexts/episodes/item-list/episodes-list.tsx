"use client";

import { EpisodesContext } from "@/contexts/episodes.context";
import { Episode } from "@/models/Episode";
import Link from "next/link";
import { useContext, useState } from "react";

type ListProps = {
  episode: Episode;
};

export function EpisodeList({ episode }: ListProps) {
  const {
    handleFavoriteEpisode: onFavoriteEpisode,
    handleWatchedEpisode: onWatchedEpisode,
    favoriteEpisodes,
    watchedEpisodes,
  } = useContext(EpisodesContext);

  const [isFavoriteEpisode, setIsFavoriteEpisode] = useState(
    favoriteEpisodes.length > 0
      ? !!favoriteEpisodes.find((favorite) => episode.id === favorite.id)
      : false
  );

  const [isWatchedEpisode, setIsWatchedEpisode] = useState(
    watchedEpisodes.length > 0
      ? !!watchedEpisodes.find((watched) => episode.id === watched.id)
      : false
  );

  function handleFavoriteEpisode() {
    onFavoriteEpisode(
      episode,
      setIsFavoriteEpisode((previous: boolean) => !previous)
    );

    onWatchedEpisode(episode, setIsWatchedEpisode(true));
  }

  function handleWatchedEpisode() {
    onWatchedEpisode(
      episode,
      setIsWatchedEpisode((previous: boolean) => !previous)
    );
  }

  return (
    <li
      key={episode.id}
      className="flex justify-between gap-x-6 px-4 py-2 hover:bg-gray-100 rounded-lg "
    >
      <div className="flex gap-x-4">
        <div className="min-w-0 flex-auto">
          <Link
            href={`/episodes/${episode.id}`}
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-sky-500"
          >
            {episode.name}
          </Link>
          <p className="mt-1 truncate text-xs leading-5 text-gray-500">
            {new Date(episode.air_date).toLocaleDateString()}
          </p>
        </div>
      </div>

      <div className="flex flex-row items-center gap-10">
        <button
          className="flex flex-col items-center justify-center gap-1 w-4"
          onClick={() => handleFavoriteEpisode()}
        >
          <svg
            className="w-8 h-5"
            viewBox="0 0 36 36"
            enableBackground="new 0 0 32 32"
            id="Editable-line"
            fill={isFavoriteEpisode ? "#60a5fa" : "transparent"}
            stroke={isFavoriteEpisode ? "#60a5fa" : "black"}
          >
            <path
              d="  M16.842,3.548l3.29,6.984c0.137,0.29,0.401,0.491,0.707,0.538l7.357,1.12c0.77,0.117,1.077,1.108,0.52,1.677l-5.324,5.436  c-0.221,0.226-0.322,0.551-0.27,0.87l1.257,7.676c0.131,0.803-0.673,1.416-1.362,1.036l-6.58-3.624c-0.273-0.151-0.6-0.151-0.873,0  l-6.58,3.624c-0.688,0.379-1.493-0.233-1.362-1.036l1.257-7.676c0.052-0.319-0.049-0.644-0.27-0.87l-5.324-5.436  c-0.557-0.569-0.25-1.56,0.52-1.677l7.357-1.12c0.306-0.047,0.57-0.248,0.707-0.538l3.29-6.984  C15.503,2.817,16.497,2.817,16.842,3.548z"
              id="XMLID_16_"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="1"
            />
          </svg>
          <span className="text-xs leading-5 text-gray-500">
            {isFavoriteEpisode ? "Favorito" : "Favoritar"}
          </span>
        </button>
        <button
          className="flex flex-col items-center justify-center gap-1 w-4"
          onClick={() => handleWatchedEpisode()}
        >
          <svg
            fill={isWatchedEpisode ? "#60a5fa" : "transparent"}
            stroke={isWatchedEpisode ? "#60a5fa" : "black"}
            viewBox="0 0 24 24"
            className="w-8 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="1"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          <span className="text-xs leading-5 text-gray-500">
            {isWatchedEpisode ? "Assistido" : "Assisti"}
          </span>
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
  );
}
