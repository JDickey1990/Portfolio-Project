// import { Carousel } from "bootstrap";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import avatar1 from "../Images/avatar-1.png";
import avatar2 from "../Images/avatar-2.png";
import avatar3 from "../Images/avatar-3.png";
import avatar4 from "../Images/avatar-4.png";
const TestimonialsCarousel = () => {
  return (
    <Carousel
    showArrows={true}
    infiniteLoop={true}
    showThumbs={false}
    showStatus={false}
    autoPlay={true}
    interval={4000}

    >

      <>
        <img src={avatar1} alt="John Doe1" />
        <div className="myCarousel">
          <h3>John Doe 1</h3>
          <p>
            Your sister sees the future, Like your mama and yourself. You've
            never learned to read or write, There's no books upon your shelf.
            And your pleasure knows no limits, Your voice is like a meadowlark -
            But your heart is like an ocean, Mysterious and dark. One more cup
            of coffee for the road, One more cup of coffee 'fore I go To the
            valley below. Copyright ©: 1975, Bob Dylan
          </p>
        </div>
      </>
      <>
        <img src={avatar2} alt="Jane Doe" />
        <div className="myCarousel">
          <h3>Jane Doe</h3>
          <p>
            Your sister sees the future, Like your mama and yourself. You've
            never learned to read or write, There's no books upon your shelf.
            And your pleasure knows no limits, Your voice is like a meadowlark -
            But your heart is like an ocean, Mysterious and dark. One more cup
            of coffee for the road, One more cup of coffee 'fore I go To the
            valley below. Copyright ©: 1975, Bob Dylan
          </p>
        </div>
      </>
      <>
        <img src={avatar3} alt="John Doe2" />
        <div className="myCarousel">
          <h3>John Doe 2</h3>
          <p>
            Your sister sees the future, Like your mama and yourself. You've
            never learned to read or write, There's no books upon your shelf.
            And your pleasure knows no limits, Your voice is like a meadowlark -
            But your heart is like an ocean, Mysterious and dark. One more cup
            of coffee for the road, One more cup of coffee 'fore I go To the
            valley below. Copyright ©: 1975, Bob Dylan
          </p>
        </div>
      </>
      <>
        <img src={avatar4} alt="John Doe3" />
        <div className="myCarousel">
          <h3>John Doe 3</h3>
          <p>
            Your sister sees the future, Like your mama and yourself. You've
            never learned to read or write, There's no books upon your shelf.
            And your pleasure knows no limits, Your voice is like a meadowlark -
            But your heart is like an ocean, Mysterious and dark. One more cup
            of coffee for the road, One more cup of coffee 'fore I go To the
            valley below. Copyright ©: 1975, Bob Dylan
          </p>
        </div>
      </>
    </Carousel>
  );
};

export default TestimonialsCarousel;
