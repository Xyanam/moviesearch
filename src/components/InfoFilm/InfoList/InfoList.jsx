import classes from "./InfoList.module.css";

const InfoList = ({ infoFilm }) => {
  return (
    <div className={classes.infoList}>
      <ul>
        <li>Дата выхода: {infoFilm.Released}</li>
        <li>Страна: {infoFilm.Country}</li>
        <li>Жанр: {infoFilm.Genre}</li>
        <li>Сценарист: {infoFilm.Writer}</li>
        <li>
          Время: <span>{infoFilm.Runtime}</span>
        </li>
        <li>Количество сезонов: {infoFilm.totalSeasons}</li>
        <li>
          В главных ролях: <span>{infoFilm.Actors}</span>
        </li>
        {infoFilm.Awards === "N/A" ? "" : <li>Награды: {infoFilm.Awards}</li>}

        {infoFilm.DVD === "N/A" ? "" : <li>Цифровой релиз: {infoFilm.DVD}</li>}
      </ul>
    </div>
  );
};
export default InfoList;
