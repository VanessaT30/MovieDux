import React, { useEffect, useState } from "react";
// import styles from "../styles.css";
import MovieCard from "./MovieCard";
// import Filter from "./Filter";
// import movies from "../data/movies.json";
// import images from "../../public/images";

export const getRatingClass = (rating) => {
  if (rating >= 7) return "rating-good";
  if (rating >= 5) return "rating-ok";
  return "rating-bad";
};

export default function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");

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

  const filterRating = (movie, rating) => {
    return rating === "" || rating.toLowerCase() <= movie.rating.toLowerCase();
  };

  const filterMovies = movies.filter(
    (m) =>
      filterSearchChange(m, searchTerm) &&
      filterGenre(m, genre) &&
      filterRating(m, rating),
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        className="search-input"
        onChange={handleSearch}
        value={searchTerm}
      />

      <div className="filter-bar">
        <div className="filter-slot ">
          <label htmlFor="genre"> Genre </label>
          <select
            className="filter-dropdown"
            name="genre"
            onChange={handleGenre}
            value={genre}
          >
            <option value={""}> All Genre </option>
            {chosenGenre.map((genre) => (
              <option value={genre}> {genre} </option>
            ))}
          </select>
        </div>

        <div className="filter-slot">
          <label htmlFor="rating"> Rating </label>
          <select
            className="filter-dropdown"
            name="rating"
            onChange={handleRating}
            value={rating}
          >
            <option value={""}> All Ratings </option>
            {ratingNumber().map((number) => (
              <option value={number}> {number} </option>
            ))}
          </select>
        </div>
      </div>

      <div className="movies-grid">
        {filterMovies.map((m) => (
          <MovieCard m={m} key={m.id} />
        ))}
        {/* </ul> */}
      </div>
    </div>
  );
}

// const movieData = fetch('../public/movies.json');

//   console.log(movies);
//   console.log(movies[0].title);

//   const thisMovie = useEffect((Movies) => {
//   }, []);

{
  /* <div className='random' >
  <div className='random2'></div>
  <div className='random3'></div>
</div> */
}
