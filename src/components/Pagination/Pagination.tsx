import React, { FC } from "react";
import { createPages } from "../../utils/pagesCreator";
import classes from "./Pagination.module.css";

type TPaginationProps = {
  totalResults?: string;
  activePage: number;
  setActivePage: (page: number) => void;
};

const Pagination: FC<TPaginationProps> = ({
  totalResults,
  activePage,
  setActivePage,
}) => {
  const pages: number[] = [];
  const totalPages = Math.ceil(Number(totalResults) / 10);

  createPages(pages, totalPages, activePage);

  const nextPage = () => {
    activePage >= totalPages
      ? setActivePage(totalPages)
      : setActivePage(activePage + 1);
  };
  const prevPage = () => {
    activePage <= 1 ? setActivePage(1) : setActivePage(activePage - 1);
  };

  return (
    <div>
      <ul className={classes.pagination}>
        <li className={classes.page} onClick={prevPage}>
          «
        </li>
        {pages.map((page) => (
          <li
            key={page}
            className={activePage === page ? classes.active : classes.page}
            onClick={() => {
              setActivePage(page);
            }}
          >
            {page}
          </li>
        ))}
        <li className={classes.page} onClick={nextPage}>
          »
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
