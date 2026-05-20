import React, {useEffect, useState} from 'react';
import styles from "../styles.css";
// import movies from "../data/movies.json";
// import images from "../../public/images";

export default function MoviesGrid() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
      fetch('/movies.json')
      .then((res) => res.json())
      .then((data) => setMovies(data));
      // setMovies = movies.parse()
    }, [])

  return (
    <div>
      <h1 > Movies </h1>
      <ul className='movies-grid'> 
        {movies.map((m) => (

          <li key={m.id} className='movie-card'>
          
          <div className='movie-card'> 
          <img src={`/images/${m.image}`} alt={m.title} />
          </div>

          <div className='movie-card-info'> 
          <p className='movie-card-title'> {m.title} </p> 
          <p className='movie-card-genre'> {m.genre} </p>  
          <p className='movie-card-rating'> {m.rating} </p>
          </div>
          </li>
          ))}
      </ul>
    </div>
  );
};



    // const movieData = fetch('../public/movies.json');

    //   console.log(movies);
    //   console.log(movies[0].title);
      
    //   const thisMovie = useEffect((Movies) => {
    //   }, []);
    