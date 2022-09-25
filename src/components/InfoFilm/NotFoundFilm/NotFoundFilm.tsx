import React from "react";
import { Link } from "react-router-dom";
import classes from "./NotFoundFilm.module.css";

const NotFoundFilm: React.FC = () => {
  return (
    <div className={classes.notFound}>
      <span className={classes.emoji}>&#128550;</span>
      <h1>Фильм не найден!</h1>
      <Link to="/" className={classes.btn}>
        Вернуться назад
      </Link>
    </div>
  );
};

export default NotFoundFilm;
