import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Header from "./Header.js";
import Tagline from "./Tagline.js";
import MewlaConverter from "./MewlaConverter.js";

function App() {
  return (
    <div className="App">
      <Header />
      <section id="cashier">
        <Tagline />
        <MewlaConverter />
      </section>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
