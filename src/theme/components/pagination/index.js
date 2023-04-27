import {
  PaginationBox,
  PaginationItem,
  PaginationLink,
} from "./paginationStyled";

export const Pagination = (props) => {
  const {
    currentPage,
    perPageItems,
    totalItems = 0,
    onPageChange = () => {},
  } = props || {};
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / perPageItems); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      {pageNumbers.map((num) => {
        return (
          <PaginationBox key={num}>
            <PaginationItem active={num === currentPage}>
              <PaginationLink
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  onPageChange(num);
                }}
              >
                {num}
              </PaginationLink>
            </PaginationItem>
          </PaginationBox>
        );
      })}
    </>
  );
};
