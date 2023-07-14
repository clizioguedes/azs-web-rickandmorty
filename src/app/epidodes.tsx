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
                  fill={"currentColor"}
                  className="w-8 h-5"
                  viewBox="0 -0.69 31.596 31.596"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g transform="translate(-546.778 -131.249)">
                    <path d="M562.576,133.9l2.281,7.02a3.7,3.7,0,0,0,3.527,2.563h7.38l-5.971,4.338a3.7,3.7,0,0,0-1.347,4.146l2.281,7.019-5.971-4.338a3.709,3.709,0,0,0-4.359,0l-5.972,4.338,2.281-7.019a3.7,3.7,0,0,0-1.347-4.146l-5.971-4.338h7.381a3.7,3.7,0,0,0,3.526-2.563l2.281-7.02m0-2.652a1.678,1.678,0,0,0-1.625,1.18l-2.558,7.874a1.708,1.708,0,0,1-1.624,1.181H548.49a1.708,1.708,0,0,0-1.005,3.09l6.7,4.866a1.708,1.708,0,0,1,.621,1.91l-2.559,7.874a1.714,1.714,0,0,0,1.631,2.243,1.682,1.682,0,0,0,1-.334l6.7-4.866a1.709,1.709,0,0,1,2.008,0l6.7,4.866a1.682,1.682,0,0,0,1,.334,1.714,1.714,0,0,0,1.631-2.243l-2.559-7.874a1.709,1.709,0,0,1,.621-1.91l6.7-4.866a1.708,1.708,0,0,0-1-3.09h-8.279a1.709,1.709,0,0,1-1.625-1.181l-2.558-7.874a1.678,1.678,0,0,0-1.625-1.18Z" />
                  </g>
                </svg>
                <span className="text-xs leading-5 text-gray-500">
                  Favoritar
                </span>
              </button>
              <button className="flex flex-col items-center justify-center gap-1">
                <svg
                  fill={"white"}
                  viewBox="0 0 24 24"
                  className="w-8 h-5"
                  stroke={"#000000"}
                  xlinkTitle="Teste"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
