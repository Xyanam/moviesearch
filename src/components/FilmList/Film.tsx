import { NavLink } from "react-router-dom";
import classes from "./Film.module.css";
import noPoster from "../../img/noposter.png";
import { TFilmList } from "./FilmList";

type TFilmProps = {
  film: TFilmList;
  addFavFilm: (f: TFilmList) => void;
};

const Film: React.FC<TFilmProps> = ({ film, addFavFilm }) => {
  return (
    <div className={classes.filmBlock}>
      <div className={classes.blockImg}>
        {film.Poster === "N/A" ? (
          <img src={noPoster} alt="" />
        ) : (
          <img src={film.Poster} alt="" />
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
            addFavFilm(film);
          }}
        >
          Добавить в любимые фильмы
        </button>
      </div>
      <NavLink to={`/info/${film.imdbID}`} className={classes.info}>
        Информация о фильме
      </NavLink>
    </div>
  );
};

export default Film;
