import React from "react";

const IMG_API = "https://api.tmdb.org/t/p/w1280";

const Movie = ({ title, posters_path, vote_average }) => {
  return (
    <div className="movie">
      <img src={IMG_API + posters_path} />
    </div>
  );
};
export default Movie;
