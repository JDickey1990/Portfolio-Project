import React from "react";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import {
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>Denver, CO</p>
            </div>
            <div className="d-flex">
              <a href="tel:555-555-5555">(406)396-3539</a>
            </div>
            <div className="d-flex">
              <p>jordan.mchael.dickey@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <a className="footer-nav">HOME</a>
                <br />
                <a className="footer-nav">ABOUT ME</a>
                <br />
                <a className="footer-nav">SERVICES</a>
              </div>
              <div className="col">
                <a className="footer-nav">EXPERIENCE</a>
                <br />
                <a className="footer-nav">PORTFOLIO</a>
                <br />
                <a className="footer-nav">CONTACT ME</a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <TwitterShareButton
                url={"https://www.linkedin.com/in/jordanmdickey/"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <TwitterIcon className="mx-3" size={36} />
              </TwitterShareButton>
              <LinkedinShareButton
                url={"https://www.linkedin.com/in/jordanmdickey/"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>
            </div>
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;Jordan M Dickey | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
