import moviesData from "./data/movies.json";
import "./App.css";
import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MoviesGrid from "./components/MoviesGrid";
// import Filter from "./components/Filter";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Watchlist from "./components/Watchlist";

function App() {
  const publicUrl =
    window.location.hostname === "vanessat30.github.io"
      ? process.env.PUBLIC_URL
      : "";
  const [movies] = useState(moviesData);
  const [watchlist, setWatchlist] = useState([]);

  const toggleWatchlist = (movieId) => {
    setWatchlist((prev) =>
      prev.includes(movieId)
        ? prev.filter((id) => id !== movieId)
        : [...prev, movieId],
    );
  };

  return (
    <div className="App">
      <div className="container">
        <Header> </Header>

        <Router basename={publicUrl}>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/watchlist">Watchlist</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route
              path="/"
              element={
                <MoviesGrid
                  movies={movies}
                  watchlist={watchlist}
                  toggleWatchlist={toggleWatchlist}
                />
              }
            ></Route>
            <Route
              path="/watchlist"
              element={
                <Watchlist
                  movies={movies}
                  watchlist={watchlist}
                  toggleWatchlist={toggleWatchlist}
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>

      <Footer>
        <p className="footer"> Footer Content here</p>
      </Footer>
    </div>
  );
}

export default App;
