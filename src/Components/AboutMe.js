import React from "react";
import headshot from "../headshot.jpg";

const AboutMe = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={headshot} alt="headshot..." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading"> About Me</h1>
          <p>
            A Full-Stack Software Engineer skilled in Javascript, React and Ruby
            coupled with a track record of 10 years experience leading the
            successful operation of cryogenic natural gas plants. Maintains a
            demonstrated ability to prioritize competing tasks under pressure,
            troubleshoot complex problems, and collaborate cross-functionally.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
