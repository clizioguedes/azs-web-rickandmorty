"use client";

import { Episode } from "@/models/Episode";

import { ReactNode, createContext, useState } from "react";

type EpisodesContextProps = {
  favoriteEpisodes: Episode[] | [];
  handleFavoriteEpisode: (ep: Episode) => void;

  watchedEpisodes: Episode[] | [];
  handleWatchedEpisode: (ep: Episode) => void;
};

export const EpisodesContext = createContext<EpisodesContextProps>(
  {} as EpisodesContextProps
);

export function EpisodesProvider({ children }: { children: ReactNode }) {
  const [favoriteEpisodes, setFavoriteEpisodes] = useState<Episode[] | []>([]);
  const [watchedEpisodes, setWatchedEpisodes] = useState<Episode[] | []>([]);

  function handleFavoriteEpisode(ep: Episode) {
    const hasExistsLikedEpisode = !!favoriteEpisodes.find(
      (liked) => liked.id === ep.id
    );

    if (hasExistsLikedEpisode) {
      return setFavoriteEpisodes(
        favoriteEpisodes.filter((liked) => liked.id !== ep.id)
      );
    }

    setFavoriteEpisodes([...favoriteEpisodes, ep]);
  }

  function handleWatchedEpisode(ep: Episode) {
    const hasExistsWatchedEpisode = !!watchedEpisodes.find(
      (liked) => liked.id === ep.id
    );

    if (hasExistsWatchedEpisode) {
      return setWatchedEpisodes(
        watchedEpisodes.filter((liked) => liked.id !== ep.id)
      );
    }

    setWatchedEpisodes([...watchedEpisodes, ep]);
  }

  return (
    <EpisodesContext.Provider
      value={{
        favoriteEpisodes: [],
        handleFavoriteEpisode,

        watchedEpisodes: [],
        handleWatchedEpisode,
      }}
    >
      {children}
    </EpisodesContext.Provider>
  );
}
