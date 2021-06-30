import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import AboutMe from "./Components/AboutMe";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <AboutMe/>
      </div>
    );
  }
}

export default App;
