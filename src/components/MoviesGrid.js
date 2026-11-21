import React, { useState } from "react";
import moviesData from "../data/movies.json";
import MovieCard from "./MovieCard";
// import Filter from "./Filter";
// import movies from "../data/movies.json";
// import images from "../../public/images";

export const getRatingClass = (rating) => {
  if (rating >= 7) return "rating-good";
  if (rating >= 4) return "rating-ok";
  return "rating-bad";
};

export default function MoviesGrid({
  movies: providedMovies,
  watchlist = [],
  toggleWatchlist = () => {},
}) {
  const movies = providedMovies ?? moviesData;

  const [searchTerm, setSearchTerm] = useState("");
  const [genreFilter, setGenreFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");

  const filtered = movies.filter((m) => {
    const matchSearchTerm = m.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchRatingNum =
      ratingFilter === "" || Number(m.rating) >= Number(ratingFilter);

    const matchGenre =
      genreFilter === "" ||
      genreFilter.toLocaleLowerCase() === m.genre.toLocaleLowerCase();

    return matchSearchTerm && matchRatingNum && matchGenre;
  });

  const genres = ["Fantasy", "Drama", "Horror", "Action"];
  const handleGenreFilter = (e) => {
    // console.log(e.target.value);
    return setGenreFilter(e.target.value);
  };

  const numberFilter = () => {
    let numbersArray = [];
    for (let i = 1; i <= 10; i++) {
      numbersArray.push(i);
    }
    return numbersArray;
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        className="search-input "
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />

      <div className=" filter-bar">
        <select
          className="filter-dropdown"
          name="genre"
          onChange={handleGenreFilter}
          value={genreFilter}
        >
          <option value={""}>Genre</option>
          {genres.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>

        <select
          className="filter-dropdown"
          name="rating"
          onChange={(e) => setRatingFilter(e.target.value)}
          value={ratingFilter}
        >
          <option value="">Rating</option>
          {numberFilter().map((rating) => (
            <option key={rating} value={rating}>
              {rating}
            </option>
          ))}
        </select>
      </div>

      <div className="movies-grid">
        {filtered.map((m) => (
          <MovieCard
            m={m}
            key={m.id}
            toggleWatchlist={toggleWatchlist}
            isWatchlisted={watchlist.includes(m.id)}
          />
        ))}
      </div>
    </>
  );
}
