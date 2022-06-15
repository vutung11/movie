import React from "react";

const Movie = ({ title, posters_path, vote_average }) => {
  return (
    <div>
      <p>{title}</p>
      <p>{vote_average}</p>
    </div>
  );
};
export default Movie;
