import React from "react";

// Icons
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

// Types
import { PaginationProps } from "@/lib/functions/types";

export const Pagination: React.FC<PaginationProps> = ({
  allItems,
  currentPage,
  goToPreviousPage,
  activeCategory,
  itemsPerPage,
  goToNextPage,
}) => {
  const totalPages = Math.ceil(allItems / itemsPerPage);

  return (
    <>
      {totalPages > 1 ? (
        <div className="flex justify-center items-center gap-2 my-3">
          <div className="block m-20 bg-rivieraparadise">
            <button
              onClick={goToPreviousPage}
              style={{ display: currentPage > 1 ? "block" : "none" }}
            >
              <div className="text-1xl text-white m-2 block">
                <SlArrowLeft />
              </div>
            </button>
          </div>
          <div className="block">
            <h4>{currentPage}</h4>
          </div>
          <div className="block m-20 bg-rivieraparadise">
            <button
              onClick={goToNextPage}
              style={{
                display: currentPage < totalPages ? "block" : "none",
              }}
            >
              <div className="text-1xl text-white m-2">
                <SlArrowRight />
              </div>
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};
