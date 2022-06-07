import Film from "./Film";
import classes from "./FilmList.module.css";

const FilmList = (props) => {
  return (
    <div className={classes.filmList}>
      <div className={classes.find}>
        <input
          type="text"
          placeholder="Введите название фильма"
          value={props.title}
          onChange={(e) => props.setTitle(e.target.value)}
        />
      </div>
      <div className={classes.filmList}>
        {props.sortedFilms.map((film) => (
          <Film
            key={film.imdbID}
            film={film}
            addFavFilm={props.addFavFilm}
            idFilm={props.idFilm}
            setIdFilm={props.setIdFilm}
            saveToLSinfoFilm={props.saveToLSinfoFilm}
          />
        ))}
      </div>
    </div>
  );
};
export default FilmList;
