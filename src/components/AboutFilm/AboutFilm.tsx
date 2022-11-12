import { TFilmList } from "../../@types/TFilmList";
import classes from "./AboutFilm.module.css";
import FavFilm from "./FavFilm";

type TAboutFilmProps = {
  favFilm: TFilmList[];
  removeFavFilm: (film: TFilmList) => void;
};

const AboutFilm: React.FC<TAboutFilmProps> = (props) => {
  return (
    <div>
      <h2 className={classes.title}>Любимые фильмы</h2>
      <div className={classes.filmList}>
        {props.favFilm.map((f) => {
          return (
            <FavFilm
              key={f.imdbID}
              favFilm={f}
              removeFavFilm={props.removeFavFilm}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AboutFilm;
