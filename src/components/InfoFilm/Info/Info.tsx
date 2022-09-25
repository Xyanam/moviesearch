import classes from "./Info.module.css";
import InfoList from "../InfoList/InfoList";
import noPoster from "../../../img/noposter.png";
import { IResponseFilm } from "../InfoFilm";
import NotFoundFilm from "../NotFoundFilm/NotFoundFilm";

type InfoProps = {
  infoFilm: IResponseFilm;
};

const Info: React.FC<InfoProps> = ({ infoFilm }) => {
  return (
    <div className={classes.film}>
      {infoFilm.Response === "False" ? (
        <NotFoundFilm />
      ) : (
        <>
          <div className={classes.infoPoster}>
            <div className={classes.poster}>
              {infoFilm.Poster === "N/A" ? (
                <img src={noPoster} alt={infoFilm.Title}></img>
              ) : (
                <img src={infoFilm.Poster} alt="poster" />
              )}
            </div>
            <div className={classes.rating}>
              <p>
                Рейтинг IMDB: <span>{infoFilm.imdbRating}</span>
              </p>
            </div>
          </div>
          <div className={classes.desc}>
            <div className={classes.title}>
              <h1>{infoFilm.Title}</h1>
              <span className={classes.plot}>{infoFilm.Plot}</span>
            </div>
            <div className={classes.about}>
              <div className={classes.title}>
                {infoFilm.Type === "series" ? (
                  <h1>О сериале</h1>
                ) : (
                  <h1>О фильме</h1>
                )}
              </div>
              <InfoList infoFilm={infoFilm} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default Info;
