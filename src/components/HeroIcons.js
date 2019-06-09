import React, { useState } from "react";
import HeroImages from "../images/HeroImages";
import { Scrollbars } from "react-custom-scrollbars";

const HeroIcons = props => {
  const [active, setActive] = useState(null);
  const newActive = id => {
    setActive(id);
  };
  
  return (
    <div className="col-heroes col-heroes-rwd-height">
      <Scrollbars>
        <ul className="hero-list">
          {HeroImages.map(({ id, src, altTag }) => (
            <li key={id} id={id} onClick={props.setCurrentHero}>
              <img
                src={src}
                alt={altTag}
                onClick={() => {
                  newActive(id);
                }}
                className={"hero-img " + (active === id && "hero-img-active")}
              />
            </li>
          ))}
        </ul>
      </Scrollbars>
    </div>
  );
};

export default HeroIcons;
