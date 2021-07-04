import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import AboutMe from "./Components/AboutMe";
import Services from "./Components/Services";
import Experience from "./Components/Experience";
import Portfolio from "./Components/Portfolio";
import Testimonials from "./Components/Testimonials";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <AboutMe />
        <Services />
        <Experience />
        <Portfolio />
        <Testimonials />
      </div>
    );
  }
}

export default App;
