import React from "react";
// IMAGES
import daydreams from "../Images/daydreams.PNG";
// FONT AWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
  // Daydreams
  const openPopupboxDaydreams = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={daydreams} alt="Daydreams Project" />
        <p>
          Lorem10 nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn
          nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn
          nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn
        </p>
        <b>GitHub:</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://github.com/JDickey1990/e-commerce_frontend")
          }
        >
          https://github.com/JDickey1990/e-commerce_frontend
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigDaydreams = {
    titleBar: {
        enable: true,
        text: "React Daydreams Project"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  return (
    <div className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box" onClick={openPopupboxDaydreams}>
            <img
              className="portfolio-image"
              src={daydreams}
              alt="Daydreams Project"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/*  */}
          <div className="portfolio-image-box">
            <img className="portfolio-image" src={daydreams} alt="" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/*  */}
          <div className="portfolio-image-box">
            <img className="portfolio-image" src={daydreams} alt="" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/*  */}
          <div className="portfolio-image-box">
            <img className="portfolio-image" src={daydreams} alt="" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigDaydreams} />
    </div>
  );
};

export default Portfolio;
