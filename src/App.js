import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import MoviesGrid from "./Components/MoviesGrid";
import Filter from "./Components/Filter";
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
