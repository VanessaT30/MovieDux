import React, { useState } from "react";
import styles from "../styles.css";
import { getRatingClass } from "./MoviesGrid";

export default function MovieCard({
  m,
  watchlist,
  toggleWatchlist,
  isWatchlisted,
}) {
  const handleImageError = (e) => {
    e.target.src = `${process.env.PUBLIC_URL}/images/default.jpg`;
  };

  return (
    <div>
      <div key={m.id} className="movie-card">
        {/* {m.filter((item) => Filter.genre === item.genre)} */}
        <img
          src={`/images/${m.image}`}
          alt={m.title}
          onError={handleImageError}
        />
        <div className="movie-card-info">
          <p className="movie-card-title"> {m.title} </p>
          <p className="movie-card-genre"> {m.genre} </p>
          <div className={`movie-card-rating ${getRatingClass(m.rating)}`}>
            <p> {m.rating} </p>
          </div>
        </div>
        <label className="switch">
          <input
            type="checkbox"
            checked={isWatchlisted}
            onChange={() => toggleWatchlist(m.id)}
          ></input>

          <span className="slider">
            <span className="slider-label">
              {isWatchlisted ? "In Watchlist" : "Add to Watchlist"}
            </span>
          </span>
        </label>
        {/* <button
          className="watchlist-btn"
          // onClick={() => setWatchlist(...watchlist, m.id)}
        >
          Watchlist
        </button> */}
      </div>
    </div>
  );
}
