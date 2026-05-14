import React, {useState} from 'react';
import styles from "../styles.css";


export default function() {
    const [movies, setMovies] = useState();
    const movieData = fetch('../public/movies.json');


    const movieTitle = JSON.parse()

  return (
    <div>
        <h1> {movieTitle} </h1>
    </div>
  );
};