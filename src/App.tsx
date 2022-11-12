import "./App.css";

import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import View from "./components/View/View";
import { TFilmList } from "./@types/TFilmList";

import FilmList from "./components/FilmList/FilmList";
import Header from "./components/Header/Header";
import AboutFilm from "./components/AboutFilm/AboutFilm";
import InfoFilm from "./components/InfoFilm/InfoFilm";
import NotFound from "./components/NotFound/NotFound";

function App() {
  const [filmes, setFilmes] = useState<TFilmList[]>([]);
  const [title, setTitle] = useState("");
  const [activePage, setActivePage] = useState(1);
  const [totalResults, setTotalResults] = useState<string>();
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

  const saveToLocalStorageFavFilm = (item: TFilmList[]) => {
    localStorage.setItem("favourite", JSON.stringify(item));
  };

  const [favFilm, setFavFilm] = useState<TFilmList[]>([]);
  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem("favourite") as string
    );
    movieFavourites === null
      ? setFavFilm(favFilm)
      : setFavFilm(movieFavourites);
  }, []);

  // Add to favourite movie

  let addFavFilm = (film: TFilmList) => {
    if (favFilm.includes(film)) {
      return favFilm;
    } else {
      let newFavFilm = [film, ...favFilm];
      setFavFilm(newFavFilm);
      saveToLocalStorageFavFilm(newFavFilm);
    }
  };

  // Remove from favourite

  let removeFavFilm = (film: TFilmList) => {
    const filteredFav = favFilm.filter((i) => i.Title !== film.Title);
    setFavFilm(filteredFav);
    saveToLocalStorageFavFilm(filteredFav);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <FilmList
                activePage={activePage}
                setActivePage={setActivePage}
                loader={loader}
                totalResults={totalResults}
                setTitle={setTitle}
                sortedFilms={sortedFilms}
                addFavFilm={addFavFilm}
                removeFavFilm={removeFavFilm}
              />
            }
          />

          <Route
            path="/favourite"
            element={
              favFilm != null && favFilm.length > 0 ? (
                <AboutFilm favFilm={favFilm} removeFavFilm={removeFavFilm} />
              ) : (
                <h1 style={{ textAlign: "center", color: "white" }}>
                  Любимых фильмов нету! &#128546;
                </h1>
              )
            }
          />
          <Route path={`/info/:id`} element={<InfoFilm />} />
          <Route path={`/view/:id`} element={<View />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
