import "./App.css";
import FilmList from "./components/FilmList/FilmList";
import React from "react";
import Header from "./components/Header/Header";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutFilm from "./components/AboutFilm/AboutFilm";

import InfoFilm from "./components/InfoFilm/InfoFilm";

function App() {
  const [filmes, setFilmes] = useState([]);
  const [title, setTitle] = useState("");
  const [loader, setLoader] = useState(false);

  // Movie Search

  let sortedFilms = filmes.filter((f) =>
    f.Title.toLowerCase().includes(title.toLowerCase())
  );

  const getMovie = async (search) => {
    const url = `http://www.omdbapi.com/?s=${search}&apikey=a2f0ac2e`;
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setFilmes(responseJson.Search);
    }
  };
  useEffect(() => {
    getMovie(title);
  }, [title]);

  // Information about film

  const [idFilm, setIdFilm] = useState("");
  const [infoFilm, setInfoFilm] = useState([]);

  const InfoMovie = async (id) => {
    const url = `http://www.omdbapi.com/?i=${id}&apikey=a2f0ac2e`;
    const response = await fetch(url);
    const responseId = await response.json();

    if (responseId.Response === "False") {
      const movieInfo = JSON.parse(localStorage.getItem("infoFilm"));
      if (movieInfo === null) {
        return infoFilm;
      }
      setInfoFilm(movieInfo);
    } else if (responseId) {
      saveToLSinfoFilm([responseId]);
      setInfoFilm(JSON.parse(localStorage.getItem("infoFilm")));
    }
  };

  // Save to localstorage

  const saveToLocalStorageFavFilm = (item) => {
    localStorage.setItem("favourite", JSON.stringify(item));
  };
  const saveToLSinfoFilm = (item) => {
    localStorage.setItem("infoFilm", JSON.stringify(item));
  };

  useEffect(() => {
    const movieFavourites = JSON.parse(localStorage.getItem("favourite"));
    movieFavourites === null
      ? setFavFilm(favFilm)
      : setFavFilm(movieFavourites);
  }, []);

  useEffect(() => {
    InfoMovie(idFilm);
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 500);
  }, [idFilm]);

  // Add to favourite movie

  const [favFilm, setFavFilm] = useState([]);

  let addFavFilm = (film) => {
    if (favFilm.includes(film)) {
      return favFilm;
    } else {
      let newFavFilm = [film, ...favFilm];
      setFavFilm(newFavFilm);
      saveToLocalStorageFavFilm(newFavFilm);
    }
  };

  // Remove from favourite

  let removeFavFilm = (film) => {
    const filteredFav = favFilm.filter((i) => i.Title !== film.Title);
    setFavFilm(filteredFav);
    saveToLocalStorageFavFilm(filteredFav);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Header films={filmes} />

        <Routes>
          <Route
            path="/"
            element={
              <FilmList
                setTitle={setTitle}
                title={title}
                films={filmes}
                sortedFilms={sortedFilms}
                addFavFilm={addFavFilm}
                idFilm={idFilm}
                setIdFilm={setIdFilm}
                saveToLSinfoFilm={saveToLSinfoFilm}
              />
            }
          />
          <Route
            path="/favourite"
            element={
              favFilm != null && favFilm.length > 0 ? (
                <AboutFilm
                  favFilm={favFilm}
                  setFavFilm={setFavFilm}
                  removeFavFilm={removeFavFilm}
                  setIdFilm={setIdFilm}
                />
              ) : (
                <h1>Любимых фильмов нету!</h1>
              )
            }
          />
          <Route
            path="/info"
            element={
              <InfoFilm
                infoFilm={infoFilm}
                setInfoFilm={setInfoFilm}
                loader={loader}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
