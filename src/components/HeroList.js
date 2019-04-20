import React from "react";
import HeroPortraits from "../images/HeroPortraits";
import HeroIcons from "./HeroIcons";

const HeroList = () => {
  return (
    <ul className="hero-list">
      {HeroPortraits.map(({ id, src, altTag }) => (
        <HeroIcons key={id} id={id} src={src} altTag={altTag} />
      ))}
    </ul>
  );
};

export default HeroList;
