"use client";

import { Episode } from "@/models/Episode";

import { ReactNode, SetStateAction, createContext, useState } from "react";

type EpisodesContextProps = {
  favoriteEpisodes: Episode[] | [];
  handleFavoriteEpisode: (ep: Episode, callback?: any) => void;

  watchedEpisodes: Episode[] | [];
  handleWatchedEpisode: (ep: Episode, callback?: any) => void;
};

export const EpisodesContext = createContext<EpisodesContextProps>(
  {} as EpisodesContextProps
);

export function EpisodesProvider({ children }: { children: ReactNode }) {
  const [favoriteEpisodes, setFavoriteEpisodes] = useState<Episode[]>([]);
  const [watchedEpisodes, setWatchedEpisodes] = useState<Episode[]>([]);

  function hasExists(arrayToVerify: Episode[], idToSearch: number) {
    const hasExistsEpisode = !!arrayToVerify.find(
      (item) => item.id === idToSearch
    );

    return hasExistsEpisode;
  }

  function handleFavoriteEpisode(
    ep: Episode,
    callback?: (value: SetStateAction<boolean>) => void
  ) {
    const hasExistsEpisode = hasExists(favoriteEpisodes, ep.id);

    if (callback) callback;

    if (hasExistsEpisode) {
      return setFavoriteEpisodes(
        favoriteEpisodes.filter((favorite) => favorite.id !== ep.id)
      );
    }

    setFavoriteEpisodes([...favoriteEpisodes, ep]);
  }

  function handleWatchedEpisode(
    ep: Episode,
    callback?: (value: SetStateAction<boolean>) => void
  ) {
    const hasExistsEpisode = hasExists(watchedEpisodes, ep.id);

    if (callback) callback;

    if (hasExistsEpisode) {
      return setWatchedEpisodes(
        watchedEpisodes.filter((watched) => watched.id !== ep.id)
      );
    }

    setWatchedEpisodes([...watchedEpisodes, ep]);
  }

  return (
    <EpisodesContext.Provider
      value={{
        favoriteEpisodes,
        handleFavoriteEpisode,

        watchedEpisodes,
        handleWatchedEpisode,
      }}
    >
      {children}
    </EpisodesContext.Provider>
  );
}
