import React from "react";
import HeroPortraits from "../images/HeroPortraits";

const HeroList = () => {
  return (
    <ul className="hero-list">
      {HeroPortraits.map(({ id, src, altTag }) => (
        <li>
          <img key={id} src={src} alt={altTag} />
        </li>
      ))}
    </ul>
  );
};

export default HeroList;
