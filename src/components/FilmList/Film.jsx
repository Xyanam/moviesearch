import { NavLink } from "react-router-dom";
import classes from "./Film.module.css";
import noPoster from "../../img/noposter.png";

const Film = (props) => {
  return (
    <div className={classes.filmBlock}>
      <div className={classes.blockImg}>
        {props.film.Poster === "N/A" ? (
          <img src={noPoster} alt="" />
        ) : (
          <img src={props.film.Poster} alt="" />
        )}
      </div>
      <div className={classes.blockInfo}>
        <h3>{props.film.Title}</h3>
        <p>Год выпуска: {props.film.Year}</p>
        <p>Тип: {props.film.Type}</p>
        <button
          className={classes.button}
          onClick={() => {
            props.addFavFilm(props.film);
          }}
        >
          Добавить в любимые фильмы
        </button>
      </div>
      <NavLink to={`/info/${props.film.imdbID}`} className={classes.info}>
        Информация о фильме
      </NavLink>
    </div>
  );
};

export default Film;
