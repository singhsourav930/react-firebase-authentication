import { useEffect, useState } from "react";

import {
  PaginationBox,
  PaginationItem,
  PaginationLink,
} from "./paginationStyled";
import RightImg from "../../../assets/icons/right.svg";

/**
 * Helper method for creating a range of numbers
 * range(1, 5) => [1, 2, 3, 4, 5]
 */
const pageRange = (from, to, step = 1) => {
  let i = from;
  const range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
};
const LEFT_PAGE = "LEFT";
const RIGHT_PAGE = "RIGHT";

export const Pagination = (props) => {
  const {
    totalItems = 0,
    pageNo = 1,
    pageNeighbours = 1,
    totalPages = 0,
  } = props;
  const [currentPageNo, setCurrentPageNo] = useState(pageNo);
  const [pageitems, setPageItems] = useState([]);
  const fetchPageNumbers = () => {
    /**
     * totalNumbers: the total page numbers to show on the control
     * totalBlocks: totalNumbers + 2 to cover for the left(<) and right(>) controls
     */
    const totalNumbers = pageNeighbours * 2 + 3;
    const totalBlocks = totalNumbers + 2;
    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPageNo - pageNeighbours);
      const endPage = Math.min(totalPages - 1, currentPageNo + pageNeighbours);
      let pages = pageRange(startPage, endPage);

      /**
       * hasLeftSpill: has hidden pages to the left
       * hasRightSpill: has hidden pages to the right
       * spillOffset: number of hidden pages either to the left or to the right
       */
      const hasLeftSpill = startPage > 2;
      const hasRightSpill = totalPages - endPage > 1;
      const spillOffset = totalNumbers - (pages.length + 1);

      switch (true) {
        // handle: (1) < {5 6} [7] {8 9} (10)
        case hasLeftSpill && !hasRightSpill: {
          const extraPages = pageRange(startPage - spillOffset, startPage - 1);
          pages = [LEFT_PAGE, ...extraPages, ...pages, totalPages];
          break;
        }

        // handle: (1) {2 3} [4] {5 6} > (10)
        case !hasLeftSpill && hasRightSpill: {
          const extraPages = pageRange(endPage + 1, endPage + spillOffset);
          pages = [1, ...pages, ...extraPages, RIGHT_PAGE];
          break;
        }

        // handle: (1) < {4 5} [6] {7 8} > (10)
        case hasLeftSpill && hasRightSpill:
        default: {
          pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
          break;
        }
      }

      return [...pages];
    }
    return pageRange(1, totalPages);
  };

  const handlePageChange = (val) => {
    let newVal = currentPageNo;
    if (val === "next") {
      newVal = currentPageNo + 1;
    } else if (val === "prev") {
      newVal = currentPageNo - 1;
    } else {
      newVal = val;
    }
    setCurrentPageNo(newVal);
    if (props.onPageChange) {
      props.onPageChange(newVal);
    }
  };
  const handleNext = () => {
    if (currentPageNo < totalPages) {
      handlePageChange("next");
    }
  };
  useEffect(() => {
    const pagenos = fetchPageNumbers();
    setPageItems(pagenos);
  }, [totalItems, currentPageNo]);

  return (
    <>
      <PaginationBox>
        {pageitems.map((item, index) => {
          if (item === RIGHT_PAGE) {
            return (
              <PaginationItem
                key={`page-handler-${index}`}
                className="next-item"
                onClick={() => handleNext()}
              >
                <PaginationLink href="/" onClick={(e) => e.preventDefault()}>
                  Next &nbsp;
                  <img src={RightImg} alt="next" />
                </PaginationLink>
              </PaginationItem>
            );
          }
          if (item === LEFT_PAGE) {
            return (
              <PaginationItem
                key={`page-handler-${index}`}
                disabled={currentPageNo === 1}
                className="prev-item"
                onClick={() =>
                  currentPageNo !== 1 ? handlePageChange("prev") : null
                }
              >
                <PaginationLink href="/" onClick={(e) => e.preventDefault()}>
                  <img src={RightImg} alt="left" className="prevBtn" />
                  &nbsp; Prev
                </PaginationLink>
              </PaginationItem>
            );
          }
          return (
            <PaginationItem
              key={`page-handler-${index}`}
              onClick={() => handlePageChange(item)}
              active={item === currentPageNo}
            >
              <PaginationLink href="/" onClick={(e) => e.preventDefault()}>
                {item}
              </PaginationLink>
            </PaginationItem>
          );
        })}
      </PaginationBox>
    </>
  );
};
