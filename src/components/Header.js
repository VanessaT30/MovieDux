import React from "react";
import styles from "../styles.css";

export default function Header() {
  return (
    <div className="header">
      <img
        className="logo"
        src={`${process.env.PUBLIC_URL}/logo.png`}
        alt="MovieDux"
      />
      <h2 className="app-substitle">
        {" "}
        Its time for popcorn! Find your next movie here.
      </h2>
    </div>
  );
}
