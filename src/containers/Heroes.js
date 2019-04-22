import React, { useState, useEffect } from "react";
import HeroImages from "../images/HeroImages";
import HeroIcons from "../components/HeroIcons";
import HeroShowcase from "../components/HeroShowcase";

const Heroes = () => {
  const [hero, currentHero] = useState("");

  const setCurrentHero = e => {
    currentHero(e.currentTarget.id);
  };

  useEffect(() => {
    console.log("Current hero is:", hero);
  },[hero]);

  return (
    <div className="row">
      <div className="col-heroes">
        <ul className="hero-list">
          {/* map function below */}
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
        <HeroShowcase hero={hero} />
      </div>
    </div>
  );
};

export default Heroes;
