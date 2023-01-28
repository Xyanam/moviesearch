import { TFilmList } from "../../@types/TFilmList";
import classes from "./FavFilmPage.module.css";
import FavFilm from "../../components/FavFilm/FavFilm";

type TFavFilmPageProps = {
  favFilm: TFilmList[];
  removeFavFilm: (film: TFilmList) => void;
};

const FavFilmPage: React.FC<TFavFilmPageProps> = (props) => {
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

export default FavFilmPage;
