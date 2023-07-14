"use client";

import { Episode } from "@/models/Episode";
import { GET_ALL_EPISODES } from "@/querys/episodes";
import { useQuery } from "@apollo/client";
import { useCallback, useState } from "react";

import { EpisodeList } from "@/components/contexts/episodes/item-list";
import { Loading } from "@/components/structure/loading/loading";
import { Pagination } from "@/components/structure/pagination";

export function Episodes() {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, loading } = useQuery(GET_ALL_EPISODES, {
    variables: {
      page: currentPage,
    },
  });

  const totalPages = data?.episodes.info.pages;

  const handleNextPage = useCallback(() => {
    setCurrentPage(currentPage + 1);
  }, [currentPage]);

  const handlePreviousPage = useCallback(() => {
    setCurrentPage(currentPage - 1);
  }, [currentPage]);

  if (loading) {
    return <Loading />;
  }

  return (
    <main className="container m-auto md:p-8 sm:p-8 p-16">
      <ul role="list" className="divide-y divide-gray-100">
        {data.episodes.results.map((episode: Episode) => (
          <EpisodeList key={episode.id} episode={episode} />
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
      />
    </main>
  );
}
