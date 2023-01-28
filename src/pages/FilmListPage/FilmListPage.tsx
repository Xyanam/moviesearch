import React from "react";
import { useState, useCallback } from "react";
import Film from "../../components/Film/Film";
import classes from "./FilmList.module.css";
import debounce from "lodash.debounce";
import Loader from "../../components/Loader/Loader";
import { TFilmList } from "../../@types/TFilmList";
import Pagination from "../../components/Pagination/Pagination";

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

const FilmListPage: React.FC<FilmListProps> = React.memo((props) => {
  const [value, setValue] = useState("");

  const debounceSearch = useCallback(
    debounce((e: string) => {
      props.setTitle(e);
    }, 300),
    []
  );

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
        <Pagination
          activePage={props.activePage}
          setActivePage={props.setActivePage}
          totalResults={props.totalResults}
        />
      ) : (
        ""
      )}
    </div>
  );
});
export default FilmListPage;
