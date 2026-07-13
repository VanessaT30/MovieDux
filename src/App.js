import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MoviesGrid from "./components/MoviesGrid";
import Filter from "./components/Filter";
import { useEffect } from "react";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header> </Header>
      </div>

      {/* <div className='container '>
        <Filter />
      </div> */}

      <div className="container">
        <MoviesGrid />
      </div>

      <Footer>
        <p className="footer"> Footer Content here</p>
      </Footer>
    </div>
  );
}

export default App;
