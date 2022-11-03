import classes from "./FavFilm.module.css";
import { NavLink } from "react-router-dom";
import { TFilmList } from "../FilmList/FilmList";
import noPoster from "../../img/noposter.png";

type TFavFilmProps = {
  favFilm: TFilmList;
  removeFavFilm: (film: TFilmList) => void;
};

const FavFilm: React.FC<TFavFilmProps> = ({ favFilm, removeFavFilm }) => {
  return (
    <div className={classes.filmBlock}>
      <div className={classes.blockImg}>
        {favFilm.Poster === "N/A" ? (
          <img src={noPoster} alt="no poster" />
        ) : (
          <img src={favFilm.Poster} alt="poster" />
        )}
      </div>
      <div className={classes.blockInfo}>
        <div className={classes.filmTitle}>
          <h3>{favFilm.Title}</h3>
        </div>
        <span>Год выпуска: {favFilm.Year}</span>
        <p>Тип: {favFilm.Type}</p>
        <button
          className={classes.button}
          onClick={() => removeFavFilm(favFilm)}
        >
          Добавить в любимые фильмы
        </button>
      </div>
      <NavLink to={`/info/${favFilm.imdbID}`} className={classes.info}>
        Информация о фильме
      </NavLink>
    </div>
  );
};

// onClick={() => props.removeFavFilm(props.favFilm)}

export default FavFilm;
