import classes from "./AboutFilm.module.css";
import FavFilm from "./FavFilm";

const AboutFilm = (props) => {
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
              setIdFilm={props.setIdFilm}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AboutFilm;
