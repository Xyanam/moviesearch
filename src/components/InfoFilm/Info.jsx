import classes from "./Info.module.css";
import InfoList from "./InfoList/InfoList";
const Info = (props) => {
  return (
    <div className={classes.film}>
      <div className={classes.infoPoster}>
        <div className={classes.poster}>
          <img src={props.infoFilm.Poster} alt="poster" />
        </div>
        <div className={classes.rating}>
          <p>
            Рейтинг IMDB: <span>{props.infoFilm.imdbRating}</span>
          </p>
        </div>
      </div>
      <div className={classes.desc}>
        <div className={classes.title}>
          <h1>{props.infoFilm.Title}</h1>
          <span>{props.infoFilm.Plot}</span>
        </div>
        <div className={classes.about}>
          <div className={classes.title}>
            {props.infoFilm.Type === "series" ? (
              <h1>О сериале</h1>
            ) : (
              <h1>О фильме</h1>
            )}
          </div>
          <InfoList infoFilm={props.infoFilm} />
        </div>
      </div>
    </div>
  );
};
export default Info;
