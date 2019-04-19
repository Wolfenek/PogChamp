import React from "react";
import HeroPortraits from "../images/HeroPortraits";

const HeroList = () => {
  return (
    <ul className="hero-list">
      {HeroPortraits.map(({ id, src, altTag }) => (
        <li key={id}>
          <img src={src} alt={altTag} />
        </li>
      ))}
    </ul>
  );
};

export default HeroList;
