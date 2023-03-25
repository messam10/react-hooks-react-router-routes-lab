import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie) =>
        <div key={movie.time}>
          <h3>{movie.title}</h3>
          <span>{movie.time}</span>
          <ul>
            {movie.genres.map((genre, index) => <li key={index}>{genre}</li>)}
          </ul>
        </div>)}
    </div>
  );
}

export default Movies;
