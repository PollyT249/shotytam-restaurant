import React from "react";

import { SubHeading, MenuItem } from "../../components";
import { data, images } from "../../constants";
import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits your palatte" />
      <h1 className="headtext__cormorant">Get a taste of this menu</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Chef&apos;s Special</p>
        <div className="app__specialMenu_menu_items">
          {data.specials.map((special, index) => (
            <MenuItem
              key={special.title + index}
              title={special.title}
              price={special.price}
              tags={special.tags}
            />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Main Course</p>
        <div className="app__specialMenu_menu_items">
          {data.mains.map((main, index) => (
            <MenuItem
              key={main.title + index}
              title={main.title}
              price={main.price}
              tags={main.tags}
            />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: "15px" }}>
      <button type="button" className="custom__button">
        <a href="#gallery">View More</a>
      </button>
    </div>
  </div>
);

export default SpecialMenu;
