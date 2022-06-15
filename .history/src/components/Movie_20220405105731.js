import React from "react";

const IMG_API = "https://api.tmdb.org/t/p/w1280";

const Movie = ({ title, posters_path, vote_average }) => {
  return (
    <div>
      <p>{title}</p>
      <p>{vote_average}</p>
    </div>
  );
};
export default Movie;
