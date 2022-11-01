import Info from "./Info/Info";
import classes from "./InfoFilm.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";

export interface IResponseFilm {
  Actors: string;
  Awards: string;
  BoxOffice: string;
  Country: string;
  DVD: string;
  Director: string;
  Genre: string;
  Language: string;
  Metascore: string;
  Plot: string;
  Poster: string;
  Production: string;
  Rated: string;
  Ratings: { Source: string; Value: string }[];
  Released: string;
  Response: string;
  Runtime: string;
  totalSeasons: string;
  Title: string;
  Type: string;
  Website: string;
  Writer: string;
  Year: string;
  imdbID: string;
  imdbRating: string;
  imdbVotes: string;
}

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
