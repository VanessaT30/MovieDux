import React, { useEffect, useState } from "react";
import style from "../styles.css";

export default function Filter() {
  const [movies, setMovies] = useState([]);
  const [genre, setGenre] = useState("");
  useEffect(() => {
    fetch("/movies.json")
      .then((res) => res.json()) //convert the fetch response into JSON
      .then((data) => setMovies(data));
  }, []);

  return (
    <div>
      <input type="text" placeholder="Search..." className="search-input " />

      {/* {movies.map((m) => ( */}
      {/* <div key={m.id}>  */}

      <div className=" filter-bar">
        {}
        <select className="filter-dropdown" name="genre">
          <option value={setGenre("fantasy")}> Fantasy </option>
          <option value={"Drama"}> Drama </option>
          <option value={"Horror"}> Horror </option>
          <option value={"Action"}> Action </option>
          const selectEl = document.get console.log(select.value);
        </select>

        <select className="filter-dropdown" name="rating">
          <option> 1 </option>
          <option> 2 </option>
          <option> 3 </option>
          <option> 4 </option>
          <option> 5 </option>
        </select>
      </div>
      {movies.filter((m) => m.title === "genre")}

      {/* ))}         */}
      <div className=""></div>
    </div>
  );
}
