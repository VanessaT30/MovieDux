import React from "react";
import styles from "../styles.css";

export default function Header() {

    return (
        <div className="header" >
            <img className="logo" src="logo.png" alt="Logo" />
            <h2 className="app-substitle"> Its time for popcorn! Find your next movie here.</h2>
        </div>
    );
};