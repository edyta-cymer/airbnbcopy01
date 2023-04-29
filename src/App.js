import "./App.css";
import SearchBar from "./components/SearchBar";
import logo from "../src/photos/logo.png";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="App">
      <nav id="nav">
        <div id="nav-icon-box">
          {" "}
          <img src={logo} alt="website-logo" id="logo" />
        </div>
        <div id="nav-searchbar-box">
          <SearchBar fontSize="small" />
        </div>
      </nav>
      <Gallery />
    </div>
  );
}

export default App;
