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
  /*............................Configuring Project Content for Popupbox...................................*/
  // Daydreams
  const openPopupboxDaydreams = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={daydreams}
          alt="Daydreams Project"
        />
        <p>
          Your sister sees the future, Like your mama and yourself. You've never
          learned to read or write, There's no books upon your shelf. And your
          pleasure knows no limits, Your voice is like a meadowlark - But your
          heart is like an ocean, Mysterious and dark. One more cup of coffee
          for the road, One more cup of coffee 'fore I go To the valley below.
          Copyright ©: 1975, Bob Dylan
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
    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: true,
          text: "React Daydreams",
        },
        fadeIn: true,
        fadeInSpeed: 500,
      },
    });
  };

  //   Second Project
  const openPopupboxSecondProject = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={daydreams}
          alt="Second Project"
        />
        <p>
          Your sister sees the future, Like your mama and yourself. You've never
          learned to read or write, There's no books upon your shelf. And your
          pleasure knows no limits, Your voice is like a meadowlark - But your
          heart is like an ocean, Mysterious and dark. One more cup of coffee
          for the road, One more cup of coffee 'fore I go To the valley below.
          Copyright ©: 1975, Bob Dylan
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
    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: true,
          text: "Second Project",
        },
        fadeIn: true,
        fadeInSpeed: 500,
      },
    });
  };

  //   Third Project
  const openPopupboxThirdProject = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={daydreams}
          alt="Third Project"
        />
        <p>
          Your sister sees the future, Like your mama and yourself. You've never
          learned to read or write, There's no books upon your shelf. And your
          pleasure knows no limits, Your voice is like a meadowlark - But your
          heart is like an ocean, Mysterious and dark. One more cup of coffee
          for the road, One more cup of coffee 'fore I go To the valley below.
          Copyright ©: 1975, Bob Dylan
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
    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: true,
          text: "Third Project",
        },
        fadeIn: true,
        fadeInSpeed: 500,
      },
    });
  };

  //   Fourth Project
  const openPopupboxFourthProject = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={daydreams}
          alt="Fourth Project"
        />
        <p>
          Your sister sees the future, Like your mama and yourself. You've never
          learned to read or write, There's no books upon your shelf. And your
          pleasure knows no limits, Your voice is like a meadowlark - But your
          heart is like an ocean, Mysterious and dark. One more cup of coffee
          for the road, One more cup of coffee 'fore I go To the valley below.
          Copyright ©: 1975, Bob Dylan
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
    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: true,
          text: "Fourth Project",
        },
        fadeIn: true,
        fadeInSpeed: 500,
      },
    });
  };

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
          <div
            className="portfolio-image-box"
            onClick={openPopupboxSecondProject}
          >
            <img
              className="portfolio-image"
              src={daydreams}
              alt="Second Project"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/*  */}
          <div
            className="portfolio-image-box"
            onClick={openPopupboxThirdProject}
          >
            <img
              className="portfolio-image"
              src={daydreams}
              alt="Third Project"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/*  */}
          <div
            className="portfolio-image-box"
            onClick={openPopupboxFourthProject}
          >
            <img
              className="portfolio-image"
              src={daydreams}
              alt="Fourth project"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      {/* <PopupboxContainer {...popupboxConfigDaydreams} />
      <PopupboxContainer {...popupboxConfigSecondProject} />
      <PopupboxContainer {...popupboxConfigThirdProject} /> */}
      <PopupboxContainer />
    </div>
  );
};

export default Portfolio;
