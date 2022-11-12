import Info from "./Info/Info";
import classes from "./InfoFilm.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import { IResponseFilm } from "../../@types/IResponseFilm";

const InfoFilm: React.FC = () => {
  const [loader, setLoader] = useState(false);
  const [infoFilm, setInfoFilm] = useState<IResponseFilm[]>([]);
  const { id } = useParams();

  useEffect(() => {
    setLoader(true);
    axios
      .get<IResponseFilm>(`http://www.omdbapi.com/?i=${id}&apikey=a2f0ac2e`)
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
        infoFilm.map((f) => <Info key={f.imdbID} infoFilm={f} />)
      )}
    </div>
  );
};

export default InfoFilm;
