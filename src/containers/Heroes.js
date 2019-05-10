import React, { useState, useEffect } from "react";
import HeroImages from "../images/HeroImages";
import HeroDescriptions from "../data/HeroDescriptions";
import HeroIcons from "../components/HeroIcons";
import HeroShowcase from "../components/HeroShowcase";
import CallToAction from "../components/CallToAction";

const Heroes = () => {
  const [hero, currentHero] = useState("");
  const [description, currentDescription] = useState(HeroDescriptions);
  const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    if (hero) {
      setCurrentDescription();
    }
  }, [hero]);

  const setCurrentHero = e => {
    currentHero(e.currentTarget.id);
  };

  const setCurrentDescription = () => {
    currentDescription(HeroDescriptions.filter(data => data.id === hero));
    setIsFiltered(true);
  };

  const returnHeroShowcase = () => {
    window.scrollTo(0, 0);
    return <HeroShowcase description={description} />;
  };

  return (
    <div className="row">
      <div className="col-heroes">
        <HeroIcons HeroImages={HeroImages} setCurrentHero={setCurrentHero} />
      </div>
      <div className="col-showcase txt-center">
        {isFiltered ? (
          returnHeroShowcase()
        ) : (
          <CallToAction />
        )}
      </div>
    </div>
  );
};

export default Heroes;
