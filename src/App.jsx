import React from "react";
import { useState, useEffect } from "react";
import Confetti from "./components/Confetti";
import Movielist from "./components/MovieList";
import Searchmovie from "./components/Search";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchmovie, setSearchmovie] = useState("");

  const Requestmovie = async () => {
    const url = `https://www.omdbapi.com/?s=${searchmovie}&apikey=a18bf78d`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.Search) {
      setMovies(data.Search);
    }
  };

  useEffect(() => {
    Requestmovie(searchmovie);
  }, [searchmovie]);

  return (
    <div className="main-container">
      <Confetti />
      <h1 className="main-header">M<span className="text-[#996236]">o</span>v<span className="text-[#ED732E]">i</span>e <span className="text-[#F8B12C]">F</span>i<span className="text-[#859D3C]">n</span>d<span className="text-[#996236]">e</span>r</h1>
      <div className="moviesearch">
        <Searchmovie
          searchmovie={searchmovie}
          setSearchmovie={setSearchmovie}
        />
      </div>
      <div className="movie-container">
        <Movielist movies={movies} />
      </div>
    </div>
  );
};
export default App;
