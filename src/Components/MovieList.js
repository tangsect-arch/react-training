import { useState, useEffect } from "react";

import { invokeApi } from "./movie.service";

import "./MovieList.css";

export default function MovieList() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    movieListFn();
  }, []);

  function movieListFn() {
    invokeApi().then((res) => {
      setMovieList(res.results);
    });
  }

  function moviesArr() {
    const poster_path = `https://image.tmdb.org/t/p/w500/`;
    return movieList.map((movie, index) => {
      return (
        <div key={movie.id} className="movie-container">
          <img src={poster_path + movie.poster_path} alt=""/>
          <h3>{movie.original_title}</h3>
          <h4>{movie.release_date}</h4>
          <p>{movie.overview}</p>
        </div>
      );
    });
  }
  return <div className="container">{moviesArr()}</div>;
}
