import Image from "next/image";

import arrowNext from "@/assets/images/right-next-.svg";

import arrowPrevious from "@/assets/images/left-arrow.svg";

type PaginationProps = {
  currentPage: number;
  totalPages?: number;

  handlePreviousPage: () => void;
  handleNextPage: () => void;
};

export function Pagination({
  currentPage,
  totalPages = 0,
  handlePreviousPage,
  handleNextPage,
}: PaginationProps) {
  return (
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
  );
}
