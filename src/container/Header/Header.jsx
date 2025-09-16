import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">Unmistakably Ukrainian</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Experience the warmth of Ukrainian tradition with a modern twist on fine
        dining. Where timeless recipes meet contemporary tastes, crafted to
        delight every guest.{" "}
      </p>
      <button type="button" className="custom__button">
        <a href="#menu">Explore Menu</a>
      </button>
    </div>

    <div className="app__wrapper_img app__header-img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
