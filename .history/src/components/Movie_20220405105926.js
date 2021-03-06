import React from "react";

const IMG_API = "https://api.tmdb.org/t/p/w1280";

const Movie = ({ title, poster_path, vote_average }) => {
  return (
    <div className="movie">
      <img src={IMG_API + poster_path} />
    </div>
  );
};
export default Movie;
