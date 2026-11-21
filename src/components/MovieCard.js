import React from "react";
import styles from "../styles.css";
import { getRatingClass } from "./MoviesGrid";
import Filter from "./Filter";

export default function MovieCard({ m }) {
  const handleImageError = (e) => {
    e.target.src = "/images/default.jpg";
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
      </div>
    </div>
  );
}
