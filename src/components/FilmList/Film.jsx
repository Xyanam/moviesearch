import { NavLink } from "react-router-dom";
import classes from "./Film.module.css";

const Film = (props) => {
  return (
    <div className={classes.filmBlock}>
      <div className={classes.blockImg}>
        <img src={props.film.Poster} alt="" />
      </div>
      <div className={classes.blockInfo}>
        <h3>{props.film.Title}</h3>
        <p>Год выпуска: {props.film.Year}</p>
        <p>Тип: {props.film.Type}</p>
        <button
          className={classes.button}
          onClick={() => props.addFavFilm(props.film)}
        >
          Добавить в любимые фильмы
        </button>
      </div>
      <NavLink
        to="/info"
        className={classes.info}
        onClick={() => {
          props.setIdFilm(props.film.imdbID);
        }}
      >
        Информация о фильме
      </NavLink>
    </div>
  );
};

export default Film;
