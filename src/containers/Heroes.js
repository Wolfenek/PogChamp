import React, { useState } from "react";
import HeroImages from "../images/HeroImages";
import HeroIcons from "../components/HeroIcons";
import HeroShowcase from "../components/HeroShowcase";

const Heroes = () => {
  const [hero, currentHero] = useState("");

  const setCurrentHero = e => {
    currentHero(e.target.id);
    console.log(hero);
  };

  return (
    <div className="row">
      <div className="col-heroes">
        <ul className="hero-list">
          {HeroImages.map(({ id, src, altTag }) => (
            <HeroIcons
              key={id}
              id={id}
              src={src}
              altTag={altTag}
              setCurrentHero={setCurrentHero}
            />
          ))}
        </ul>
      </div>
      <div className="col-showcase">
        <HeroShowcase />
      </div>
    </div>
  );
};

export default Heroes;
