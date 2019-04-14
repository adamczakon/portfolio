import React, { Component } from "react";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import "./style/main.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <Portfolio />
        <Footer />
      </div>
    );
  }
}

export default App;
