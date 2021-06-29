import React from 'react';
import Typed from 'react-typed';


const Header = () => {
    return (
      <div className="header-wrapper">
            {/* <Particles 
              className="particles-canvas"
              params={{
                particles: {
                  number: {
                    value: 50,
                  },
                  color: {
                    value: ['#141111']
                  },
                  line_linked: {
                    color: '#fcf7f7',
                    opacity: 1
                  }
                }
              }}
            /> */}
          <div className="main-info">
            {/* <h1></h1> */}
            <Typed
                className="typed-text"
                strings={["Full Stack Software Engineering", "JavaScript", "React", "Redux", "Ruby", "Ruby on Rails", "HTML", "CSS", "Bootstrap"]}
                typeSpeed={30}
                backSpeed={60}
                loop
            />
            <a href="#" className="btn-main-heading">Contact Me </a>
          </div>
      </div> 
    )
}

export default Header
