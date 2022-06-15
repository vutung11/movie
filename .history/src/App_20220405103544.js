import { useEffect, useState } from "react";
import "./App.css";
import Movie from "./components/Movie";

const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMG_API = "https://api.tmdb.org/t/p/w1280";
const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&page=1";
function App() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const movieResp = await fetch(FEATURED_API);
    
  }, []);
  return (
    <>
      <Movie />
      Get Movie
    </>
  );
}

export default App;
