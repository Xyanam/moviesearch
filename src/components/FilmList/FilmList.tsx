import React from "react";
import { useState, useCallback } from "react";
import Film from "./Film";
import classes from "./FilmList.module.css";
import debounce from "lodash.debounce";
import Loader from "../Loader/Loader";
import { createPages } from "../../utils/pagesCreator";

export type TFilmList = {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
};

type FilmListProps = {
  activePage: number;
  setActivePage: (page: number) => void;
  loader: boolean;
  totalResults?: string;
  setTitle: (event: string) => void;
  sortedFilms: TFilmList[];
  addFavFilm: (film: TFilmList) => void;
  removeFavFilm: (film: TFilmList) => void;
};

const FilmList: React.FC<FilmListProps> = React.memo((props) => {
  const pages: number[] = [];
  const totalPages = Math.ceil(Number(props.totalResults) / 10);

  createPages(pages, totalPages, props.activePage);

  const [value, setValue] = useState("");

  const debounceSearch = useCallback(
    debounce((e: string) => {
      props.setTitle(e);
    }, 300),
    []
  );

  const nextPage = () => {
    props.activePage >= totalPages
      ? props.setActivePage(totalPages)
      : props.setActivePage(props.activePage + 1);
  };
  const prevPage = () => {
    props.activePage <= 1
      ? props.setActivePage(1)
      : props.setActivePage(props.activePage - 1);
  };

  return (
    <div className={classes.filmList}>
      <div className={classes.find}>
        <input
          type="text"
          placeholder="Введите название фильма"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            debounceSearch(e.target.value);
            props.setActivePage(1);
          }}
        />
        {props.sortedFilms.length ? (
          <div>
            <h3 className={classes.totalFind}>
              Всего найдено: {props.totalResults}
            </h3>
          </div>
        ) : (
          ""
        )}
      </div>
      <div></div>
      <div className={classes.filmList}>
        {props.loader ? (
          <Loader />
        ) : (
          props.sortedFilms.map((film) => (
            <Film
              key={film.imdbID}
              film={film}
              addFavFilm={props.addFavFilm}
              removeFavFilm={props.removeFavFilm}
            />
          ))
        )}
      </div>
      {props.sortedFilms.length > 0 ? (
        <div>
          <ul className={classes.pagination}>
            <li className={classes.page} onClick={prevPage}>
              «
            </li>
            {pages.map((page) => (
              <li
                key={page}
                className={
                  props.activePage === page ? classes.active : classes.page
                }
                onClick={() => {
                  props.setActivePage(page);
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
      ) : (
        ""
      )}
    </div>
  );
});
export default FilmList;
