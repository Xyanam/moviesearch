import { IResponseFilm } from "../InfoFilm";
import classes from "./InfoList.module.css";

type InfoListProps = {
  infoFilm: IResponseFilm;
};

const InfoList: React.FC<InfoListProps> = ({ infoFilm }) => {
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
        {infoFilm.Type === "series" ? (
          <li>Количество сезонов: {infoFilm.totalSeasons}</li>
        ) : (
          ""
        )}
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
