// import React from "react";
import Typed from "react-typed";
import React, { Component } from "react";
import Particles from "react-tsparticles";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.particlesInit = this.particlesInit.bind(this);
    this.particlesLoaded = this.particlesLoaded.bind(this);
  }

  particlesInit(main) {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  }

  particlesLoaded(container) {
    console.log(container);
  }

  render() {
    return (
      <div className="header-wrapper">
        <div className="main-info">
          <h1 className="main-header">Insert Awesome Title Here</h1>

          <Typed
            className="typed-text"
            strings={[
              "Full Stack Software Engineering",
              "JavaScript",
              "React",
              "Redux",
              "Ruby",
              "Ruby on Rails",
              "HTML",
              "CSS",
              "Bootstrap",
            ]}
            typeSpeed={30}
            backSpeed={60}
            loop
          />

          <a href="#" className="btn-main-heading">
            Contact Me{" "}
          </a>
        </div>
        <Particles
          id="tsparticles"
          init={this.particlesInit}
          loaded={this.particlesLoaded}
          options={{
            fpsLimit: 60,
            interactivity: {
              detectsOn: "canvas",
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 40,
                },
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 6,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  value_area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "diamond",
              },
              size: {
                random: true,
                value: 5,
              },
            },
            detectRetina: true,
          }}
        />
      </div>
    );
  }
}
