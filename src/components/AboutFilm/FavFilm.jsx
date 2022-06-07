import classes from "./FavFilm.module.css";
import { NavLink } from "react-router-dom";

const FavFilm = (props) => {
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
        <NavLink
          to="/info"
          className={classes.info}
          onClick={() => props.setIdFilm(props.favFilm.imdbID)}
        >
          Информация о фильме
        </NavLink>
      </div>
    </div>
  );
};

export default FavFilm;
