import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IResponseFilm } from "../../@types/IResponseFilm";
import classes from "./View.module.css";

const View = () => {
  const { id } = useParams();
  const [film, setFilm] = useState<IResponseFilm>();
  useEffect(() => {
    axios
      .get<IResponseFilm>(`http://www.omdbapi.com/?i=${id}&apikey=a2f0ac2e`)
      .then((response) => setFilm(response.data));
    const script = document.createElement("script");
    script.src = "/player.js";
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, [id]);
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Смотреть {film?.Title}</h1>
      <div id="kinobd" data-resize="1" data-imdb={id} />
    </div>
  );
};

export default View;
