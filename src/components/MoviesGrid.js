import React, { useState } from "react";
import styles from "../styles.css";
import MovieCard from "./MovieCard";
// import Filter from "./Filter";
// import movies from "../data/movies.json";
// import images from "../../public/images";

export const getRatingClass = (rating) => {
  if (rating >= 7) return "rating-good";
  if (rating >= 4) return "rating-ok";
  return "rating-bad";
};

export default function MoviesGrid({ movies, watchlist, toggleWatchlist }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [genreFilter, setGenreFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");

  const chosenGenre = ["Fantasy", "Drama", "Horror", "Action"];

  useEffect(() => {
    fetch("/movies.json")
      .then((res) => res.json())
      .then((data) => setMovies(data));
    // setMovies = movies.parse()
  }, []);

  const ratingNumber = () => {
    const ratingNum = [];
    for (let i = 0; i <= 10; i++) {
      ratingNum.push(i);
    }
    return ratingNum;
  };

  function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    console.log(searchTerm);
    // console.log(e);
  }

  function handleGenre(e) {
    const genre = e.target.value.toLowerCase();
    setGenre(genre);
    console.log(e.target.value);
  }

  function handleRating(e) {
    const rating = e.target.value.toLowerCase();
    setRating(rating);
    console.log(rating);
    // console.log(e);
  }

  const filterGenre = (movie, genre) => {
    return genre === "" || genre.toLowerCase() === movie.genre.toLowerCase();
  };

  const filterSearchChange = (movie, searchTerm) => {
    return (
      searchTerm === "" ||
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
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
