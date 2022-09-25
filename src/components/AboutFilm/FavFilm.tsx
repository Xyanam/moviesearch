import classes from "./FavFilm.module.css";
import { NavLink } from "react-router-dom";
import { TFilmList } from "../FilmList/FilmList";

type TFavFilmProps = {
  favFilm: TFilmList;
  removeFavFilm: (film: TFilmList) => void;
};

const FavFilm: React.FC<TFavFilmProps> = (props) => {
  return (
    <div className={classes.filmBlock}>
      <div className={classes.blockImg}>
        <img src={props.favFilm.Poster} alt="" />
      </div>
      <div className={classes.blockInfo}>
        <h3>{props.favFilm.Title}</h3>
        <span>Год выпуска: {props.favFilm.Year}</span>
        <span>Тип: {props.favFilm.Type}</span>
        <button
          onClick={() => props.removeFavFilm(props.favFilm)}
          className={classes.button}
        >
          Удалить
        </button>
        <NavLink to={`/info/${props.favFilm.imdbID}`} className={classes.info}>
          Информация о фильме
        </NavLink>
      </div>
    </div>
  );
};

export default FavFilm;
