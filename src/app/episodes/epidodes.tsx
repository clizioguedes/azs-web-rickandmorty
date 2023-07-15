"use client";

import { GET_ALL_EPISODES } from "@/querys/episodes";
import { useQuery } from "@apollo/client";
import { useCallback, useState } from "react";

import { EpisodeList } from "@/components/contexts/episodes/item-list";
import { HandleError } from "@/components/structure/handle-error/handle-error";
import { Loading } from "@/components/structure/loading/loading";
import { Pagination } from "@/components/structure/pagination";
import { Search } from "@/components/structure/search";
import { Episode } from "@/models/Episode";

export function Episodes() {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  const { data, loading, error } = useQuery(GET_ALL_EPISODES, {
    variables: {
      page: currentPage,
      filter: {
        name: search,
      },
    },
  });

  const totalPages = data?.episodes.info.pages;

  const handleNextPage = useCallback(() => {
    setCurrentPage(currentPage + 1);
  }, [currentPage]);

  const handlePreviousPage = useCallback(() => {
    setCurrentPage(currentPage - 1);
  }, [currentPage]);

  if (error) {
    return <HandleError />;
  }

  return (
    <main className="container m-auto md:p-8 sm:p-8 p-16">
      <Search onSearch={setSearch} searchValue={search} />

      {loading ? (
        <Loading />
      ) : (
        <>
          <ul role="list" className="divide-y divide-gray-100">
            {data.episodes.results.map((episode: Episode) => (
              <EpisodeList key={episode.id} episode={episode} />
            ))}
          </ul>
          {data.episodes.results.length > 0 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              handleNextPage={handleNextPage}
              handlePreviousPage={handlePreviousPage}
            />
          )}
        </>
      )}
    </main>
  );
}
