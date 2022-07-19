import Info from "./Info";
import classes from "./InfoFilm.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";

const InfoFilm = () => {
  const [loader, setLoader] = useState(false);
  const [infoFilm, setInfoFilm] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    setLoader(true);
    axios
      .get(`http://www.omdbapi.com/?i=${id}&apikey=a2f0ac2e`)
      .then((response) => {
        setInfoFilm([response.data]);
        setLoader(false);
      });
  }, [id]);
  return (
    <div className={classes.infoFilm}>
      {loader ? (
        <Loader />
      ) : (
        infoFilm.map((f) => <Info key={f.imdbID} infoFilm={f} id={id} />)
      )}
    </div>
  );
};

export default InfoFilm;
