import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import AboutMe from "./Components/AboutMe";
import Services from "./Components/Services";
import Experience from "./Components/Experience";
import Portfolio from "./Components/Portfolio";
import Testimonials from "./Components/Testimonials";
import ContactMe from "./Components/ContactMe";
import Footer from "./Components/Footer";

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
        <ContactMe />
        <Footer />
      </div>
    );
  }
}

export default App;
