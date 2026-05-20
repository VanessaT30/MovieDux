import React, { useEffect, useState } from "react";
import style from "../styles.css"

export default function Filter() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch('/movies.json')
        .then((res) => (res.json())) //convert the fetch response into JSON
        .then((data) => setMovies(data));
    }, [])

    return (
        <div>
            <input type="text" placeholder="Search..." 
            className="search-input " />

            {/* {movies.map((m) => ( */}
                {/* <div key={m.id}>  */}
                <div className="filter-slot">
                <select  className="filter-dropdown" name="genre" > 
                    <option > fantasy </option>           
                </select>
                </div>
                <div className="filter-slot" filter-bar >                 
                <select className="filter-dropdown" name="rating" > 
                    <option  > 0 </option>           
                </select>
                </div>
            {/* ))}         */}
            <div className="">           
            </div>
        </div>
    );
}