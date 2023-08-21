import React from "react";
import "./Banner.css";
import useFetch from "../../utils/useFetch";
import requests from "../../utils/Requests"
import { Link } from "react-router-dom";

function Banner() { 
 const movies = useFetch(requests.fetchNetflixOriginals);
 const randomIndex = Math.floor(Math.random() * movies.length-1);
 const movie = movies[randomIndex];
  
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <header
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backdropPosition: "center center",
      }}
      className="banner"
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}

        </h1>

        {/* 2 buttons */}
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <Link to={"/mylist"}>
          <button className="banner_button">My List </button>
          </Link>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 200)}
        </h1>
      </div>
      {/* helps to get the fade effect  */}
      <div className="banner__fadeBottom" />
    </header>
  );
}

export default Banner;
