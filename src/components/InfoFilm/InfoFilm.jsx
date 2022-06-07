import Loader from "../Loader/Loader";
import Info from "./Info";
import classes from "./InfoFilm.module.css";
const InfoFilm = (props) => {
  return (
    <div className={classes.infoFilm}>
      {!props.loader ? (
        props.infoFilm.map((f) => <Info key={f.imdbID} infoFilm={f} />)
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default InfoFilm;
