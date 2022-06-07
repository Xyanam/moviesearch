import classes from "./InfoList.module.css";

const InfoList = (props) => {
  return (
    <div className={classes.infoList}>
      <ul>
        <li>Дата выхода: {props.infoFilm.Released}</li>
        <li>Страна: {props.infoFilm.Country}</li>
        <li>Жанр: {props.infoFilm.Genre}</li>
        <li>Сценарист: {props.infoFilm.Writer}</li>
        <li>
          Время: <span>{props.infoFilm.Runtime}</span>
        </li>
        <li>Количество сезонов: {props.infoFilm.totalSeasons}</li>
        <li>
          В главных ролях: <span>{props.infoFilm.Actors}</span>
        </li>
        <li>Награды: {props.infoFilm.Awards}</li>
        <li>Цифровой релиз: {props.infoFilm.DVD}</li>
      </ul>
    </div>
  );
};
export default InfoList;
