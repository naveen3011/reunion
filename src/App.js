import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";
import Header from "./Header";
import CustomSearch from "./CustomSearch";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <h2>Search properties by filters</h2>
      </div>
      <CustomSearch />
    </div>
  );
}

export default App;
