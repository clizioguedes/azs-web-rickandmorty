"use client";

import { Episode } from "@/models/Episode";
import { GET_ALL_EPISODES } from "@/querys/episodes";
import { useQuery } from "@apollo/client";

type EpisodesProp = {};

export function Episodes({}: EpisodesProp) {
  const { data, loading } = useQuery(GET_ALL_EPISODES);

  console.log("data", data, "loading", loading);

  if (loading) {
    return <div>Is loading</div>;
  }

  return (
    <main>
      {data.episodes.results.map((ep: Episode) => {
        return <div>{ep.name}</div>;
      })}
    </main>
  );
}
