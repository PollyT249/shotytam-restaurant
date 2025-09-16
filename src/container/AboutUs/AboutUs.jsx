import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.S} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Founded with a love for Ukrainian cuisine, we strive to share our
          heritage through food that feels both comforting and refined. Every
          plate tells a story of tradition, culture, and care.
        </p>
        <button type="button" className="custom__button">
          <a href="#video"> Know More </a>
        </button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our Story</h1>
        <img
          src={images.spoon}
          alt="about_spoon"
          className="spoon__img rotate"
        />
        <p className="p__opensans">
          From humble family recipes passed down through generations to
          innovative modern dishes, our story is rooted in tradition yet open to
          new flavours. We honour the past while embracing the future of
          Ukrainian cuisine.
        </p>
        <button type="button" className="custom__button">
          <a href="#chef"> Know More </a>
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
