import React,{ useMemo, useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import {
  ChevronRight as IconRight,
  ChevronLeft as IconLeft,
  ChevronDoubleLeft as IconStart,
  ChevronDoubleRight as IconEnd,
} from "react-bootstrap-icons";


import "./Pagination.css";

export const range = (from, to, step = 1) => {
  let i = from;
  const range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
};

const LEFT_PAGE = "LEFT";
const START_PAGE = "START";
const RIGHT_PAGE = "RIGHT";
const END_PAGE = "END";
const RANGE_NUMBERS = 2

const defaultOnPageChange = () => {};

const Pagination = ({
  paginate,
  onPageChange = defaultOnPageChange,
}) => {
  const [totalPages, setTotalPages] = useState(paginate.pageCount);
  const [currentPage, setCurrentPage] = useState(paginate.page);
  const [pages, setPages] = useState([]);


  useEffect(() => {
    gotoPage(paginate.page);
  }, [totalPages]);

  useEffect(() => {
     setTotalPages(paginate.pageCount);
   
  }, [paginate.pageCount]);

  useEffect(() => {
    const totalNumbers = RANGE_NUMBERS * 2 +3;
    const totalBlocks = totalNumbers + 2;
    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - RANGE_NUMBERS);
      const endPage = Math.min(totalPages - 1, currentPage +  RANGE_NUMBERS);
      let rangePages = range(startPage, endPage);

      /**
       * hasLeftSpill: has hidden pages to the left
       * hasRightSpill: has hidden pages to the right
       * spillOffset: number of hidden pages either to the left or to the right
       */
      const hasLeftSpill = startPage > 2;
      const hasRightSpill = totalPages - endPage > 1;
      const spillOffset = totalNumbers - (rangePages.length + 1);

      switch (true) {
        // handle: (1) < {5 6} [7] {8 9} (10)
        case hasLeftSpill && !hasRightSpill: {
          const extraPages = range(startPage - spillOffset, startPage - 1);
          rangePages = [START_PAGE, LEFT_PAGE, ...extraPages, ...rangePages];
          break;
        }

        // handle: (1) {2 3} [4] {5 6} > (10)
        case !hasLeftSpill && hasRightSpill: {
          const extraPages = range(endPage + 1, endPage + spillOffset);
          rangePages = [...rangePages, ...extraPages, RIGHT_PAGE, END_PAGE];
          break;
        }

        // handle: (1) < {4 5} [6] {7 8} > (10)
        case hasLeftSpill && hasRightSpill:
        default: {
          rangePages = [START_PAGE, LEFT_PAGE, ...rangePages, RIGHT_PAGE, END_PAGE];
          break;
        }
      }

      setPages([1, ...rangePages, totalPages]);
      return;
    }

    setPages(range(1, totalPages));
  }, [totalPages, currentPage]);

  const gotoPage = (page) => {
    
    const newCurrentPage = Math.max(0, Math.min(page, totalPages));
    const paginationData = {
      currentPage: newCurrentPage,
      totalPages: totalPages,
      pageLimit: paginate.take,
      totalElements: paginate.itemCount,
    };

    setCurrentPage(newCurrentPage);
    onPageChange(paginationData);
  };

  const handleClick = useCallback((page) => (evt) => {
    evt.preventDefault();
    gotoPage(page);
  });

  const handleMoveLeft = useCallback((evt) => {
    evt.preventDefault();
    gotoPage(currentPage - 1);
  });

  const handleMoveRight = useCallback((evt) => {
    evt.preventDefault();
    gotoPage(currentPage + 1);
  });

  const handleMoveStart = useCallback((evt) => {
    evt.preventDefault();
    gotoPage(1);
  });

  const handleMoveEnd = useCallback((evt) => {
    evt.preventDefault();
    gotoPage(totalPages);
  });

  const pageRender = useMemo(() => {
    if (totalPages === 1) {
      return null;
    }
    return pages.map((page, index) => {
      if (page === START_PAGE) {
        return (
          <li className="page-item" key={index}>
            <a aria-label="Previous" className="page-link" href="#" onClick={handleMoveStart}>
              <IconStart />
            </a>
          </li>
        );
      }
      if (page === END_PAGE) {
        return (
          <li className="page-item" key={index}>
            <a aria-label="Previous" className="page-link" href="#" onClick={handleMoveEnd}>
              <IconEnd />
            </a>
          </li>
        );
      }
      if (page === LEFT_PAGE) {
        return (
          <li className="page-item" key={index}>
            <a aria-label="Previous" className="page-link" href="#" onClick={handleMoveLeft}>
              <IconLeft />
            </a>
          </li>
        );
      }
      if (page === RIGHT_PAGE) {
        return (
          <li className="page-item" key={index}>
            <a aria-label="Next" className="page-link" href="#" onClick={handleMoveRight}>
              <IconRight />
            </a>
          </li>
        );
      }
      return (
        <li className={`page-item${currentPage === page ? " active" : ""}`} key={index}>
          <a className="page-link" href="#" onClick={handleClick(page)}>
            {page}
          </a>
        </li>
      );
    });
  }, [pages, currentPage]);

  return (
    <>
      <nav className="ld-pagination">
        <ul className="pagination">{pageRender}</ul>
      </nav>
    </>
  );
};

Pagination.propTypes = {
  paginate: PropTypes.shape({
    hasNextPage: PropTypes.bool,
    hasPreviousPage: PropTypes.bool,
    itemCount: PropTypes.number,
    page: PropTypes.number,
    pageCount: PropTypes.number,
    take: PropTypes.number,
  }),
  onPageChange: PropTypes.func,
};
export default Pagination;
