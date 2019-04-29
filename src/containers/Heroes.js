import React, { useState, useEffect } from "react";
import HeroImages from "../images/HeroImages";
import HeroDescriptions from "../data/HeroDescriptions";
import HeroIcons from "../components/HeroIcons";
import HeroShowcase from "../components/HeroShowcase";

const Heroes = () => {
  const [hero, currentHero] = useState("");
  const [allDescriptions] = useState(HeroDescriptions);
  const [description, currentDescription] = useState(HeroDescriptions);

  useEffect(() => {
    console.log("Current hero is:", hero);
    setCurrentDescription();
    console.log("Description is", description);
  }, [hero]);

  const setCurrentHero = e => {
    currentHero(e.currentTarget.id);
  };

  function setCurrentDescription() {
    currentDescription(allDescriptions.filter(data => data.id === hero));
  }

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
      <div className="col-showcase txt-center">
        {/* might need to only render HeroShowcase when the filter method is complete */}
        {hero ? (
          <HeroShowcase description={description} />
        ) : (
          <h2>Select heroes on the left to view info about them</h2>
        )}
      </div>
    </div>
  );
};

export default Heroes;
