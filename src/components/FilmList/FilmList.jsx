import Film from "./Film";
import classes from "./FilmList.module.css";
import debounce from "lodash.debounce";
import { useState, useCallback } from "react";
import Loader from "../Loader/Loader";
import { createPages } from "../../utils/pagesCreator";

const FilmList = (props) => {
  const pages = [];
  const totalPages = Math.ceil(props.totalResults / 10);
  createPages(pages, totalPages, props.activePage);

  const [value, setValue] = useState("");

  const debounceSearch = useCallback(
    debounce((e) => {
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
            <h3>Всего найдено: {props.totalResults}</h3>
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
              favFilm={props.favFilm}
              addFavFilm={props.addFavFilm}
            />
          ))
        )}
      </div>
      {props.sortedFilms ? (
        <div>
          <ul className={classes.pagination}>
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
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default FilmList;
