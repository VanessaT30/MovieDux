import React from "react";
import styles from "../styles.css";
import MovieCard from "./MovieCard";

export default function Watchlist({ movies, watchlist, toggleWatchlist }) {
  return (
    <>
      <div>
        <h1 className="title"> Your Watchlist</h1>
        <div className="watchlist">
          {watchlist.map((id) => {
            const movie = movies.find((movie) => movie.id === id);
            if (!movie) return null;
            return (
              <MovieCard
                key={id}
                m={movie}
                toggleWatchlist={toggleWatchlist}
                isWatchlisted={true}
              ></MovieCard>
            );
          })}
        </div>
      </div>
    </>
  );
}
