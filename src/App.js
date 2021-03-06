import "./App.css";
import FilmList from "./components/FilmList/FilmList";
import Header from "./components/Header/Header";
import AboutFilm from "./components/AboutFilm/AboutFilm";
import InfoFilm from "./components/InfoFilm/InfoFilm";
import NotFound from "./components/NotFound/NotFound";

import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";

function App() {
  const [filmes, setFilmes] = useState([]);
  const [title, setTitle] = useState("");
  const [activePage, setActivePage] = useState(1);
  const [totalResults, setTotalResults] = useState();
  const [loader, setLoader] = useState(false);

  // Movie Search
  let sortedFilms = filmes.filter((f) =>
    f.Title.toLowerCase().includes(title.toLowerCase())
  );

  useEffect(() => {
    setLoader(true);
    axios
      .get(
        `http://www.omdbapi.com/?s=${title}&page=${activePage}&apikey=a2f0ac2e`
      )
      .then((response) => {
        response.data.Search ? setFilmes(response.data.Search) : setFilmes([]);
        setTotalResults(response.data.totalResults);
        setLoader(false);
      });
    window.scrollTo({
      top: 50,
      behavior: "smooth",
    });
  }, [title, activePage]);

  // Save to localstorage

  const saveToLocalStorageFavFilm = (item) => {
    localStorage.setItem("favourite", JSON.stringify(item));
  };

  useEffect(() => {
    const movieFavourites = JSON.parse(localStorage.getItem("favourite"));
    movieFavourites === null
      ? setFavFilm(favFilm)
      : setFavFilm(movieFavourites);
  }, []);

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
                activePage={activePage}
                setActivePage={setActivePage}
                loader={loader}
                setLoader={setLoader}
                totalResults={totalResults}
                setTitle={setTitle}
                title={title}
                films={filmes}
                sortedFilms={sortedFilms}
                favFilm={favFilm}
                addFavFilm={addFavFilm}
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
                />
              ) : (
                <h1 style={{ textAlign: "center" }}>
                  ?????????????? ?????????????? ????????! &#128546;
                </h1>
              )
            }
          />
          <Route path={`/info/:id`} element={<InfoFilm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
