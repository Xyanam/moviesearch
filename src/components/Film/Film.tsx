import { NavLink } from "react-router-dom";
import classes from "./Film.module.css";
import noPoster from "../../img/noposter.png";
import { TFilmList } from "../../@types/TFilmList";

type TFilmProps = {
  film: TFilmList;
  addFavFilm: (f: TFilmList) => void;
  removeFavFilm: (f: TFilmList) => void;
};

const Film: React.FC<TFilmProps> = ({ film, addFavFilm, removeFavFilm }) => {
  const movieFavourites = JSON.parse(
    localStorage.getItem("favourite") as string
  );

  const addFilmInFavourite = () => {
    movieFavourites === null
      ? addFavFilm(film)
      : movieFavourites.find((f: TFilmList) => f.imdbID === film.imdbID)
      ? removeFavFilm(film)
      : addFavFilm(film);
  };

  return (
    <div className={classes.filmBlock}>
      <div className={classes.blockImg}>
        {film.Poster === "N/A" ? (
          <img src={noPoster} alt="poster" />
        ) : (
          <img src={film.Poster} alt="poster" />
        )}
      </div>
      <div className={classes.blockInfo}>
        <div className={classes.filmTitle}>
          <h3>{film.Title}</h3>
        </div>
        <span>Год выпуска: {film.Year}</span>
        <p>Тип: {film.Type}</p>
        <button
          className={classes.button}
          onClick={() => {
            addFilmInFavourite();
          }}
        >
          {movieFavourites === null
            ? "Добавить в любимые фильмы"
            : movieFavourites.find((f: TFilmList) => f.imdbID === film.imdbID)
            ? "Удалить из любимых фильмов"
            : "Добавить в любимые фильмы"}
        </button>
      </div>
      <NavLink to={`/info/${film.imdbID}`} className={classes.info}>
        Информация о фильме
      </NavLink>
    </div>
  );
};

export default Film;
