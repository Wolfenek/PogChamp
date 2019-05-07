import React, { useState, useEffect } from "react";
import HeroImages from "../images/HeroImages";
import HeroDescriptions from "../data/HeroDescriptions";
import HeroIcons from "../components/HeroIcons";
import HeroShowcase from "../components/HeroShowcase";

const Heroes = () => {
  const [hero, currentHero] = useState("");
  const [description, currentDescription] = useState(HeroDescriptions);

  useEffect(() => {
    if (hero) {
      setCurrentDescription();
    }
  }, [hero]);

  useEffect(() => {
    returnHeroShowcase();
  }, [description]);

  const setCurrentHero = e => {
    currentHero(e.currentTarget.id);
  };

  const setCurrentDescription = () => {
    currentDescription(HeroDescriptions.filter(data => data.id === hero));
  };

  const returnHeroShowcase = () => {
    return <HeroShowcase description={description} />;
  };

  return (
    <div className="row">
      <div className="col-heroes">
        <HeroIcons HeroImages={HeroImages} setCurrentHero={setCurrentHero} />
      </div>
      <div className="col-showcase txt-center">
        {/* might need to only render HeroShowcase when the filter method is complete */}
        {hero ? (
          returnHeroShowcase()
        ) : (
          <h2>Select heroes on the left to view info about them</h2>
        )}
      </div>
    </div>
  );
};

export default Heroes;
