import React from "react";
import { Scrollbars } from "react-custom-scrollbars";

const HeroIcons = props => {
  return (
    <Scrollbars>
      <ul className="hero-list">
        {props.HeroImages.map(({ id, src, altTag }) => (
          <li key={id} id={id} onClick={props.setCurrentHero}>
            <img src={src} alt={altTag} />
          </li>
        ))}
      </ul>
    </Scrollbars>
  );
};

export default HeroIcons;
