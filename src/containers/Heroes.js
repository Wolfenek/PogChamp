import React, { useState, useEffect } from "react";
import HeroDescriptions from "../data/HeroDescriptions";
import HeroIcons from "../components/HeroIcons";
import HeroShowcase from "../components/HeroShowcase";
import CallToAction from "../components/CallToAction";

const Heroes = () => {
  const [hero, currentHero] = useState(null);
  const [description, currentDescription] = useState(HeroDescriptions);
  const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    const setCurrentDescription = () => {
      currentDescription(HeroDescriptions.filter(data => data.id === hero));
    };
    if (hero) {
      setCurrentDescription();
      window.scrollTo(0, 0);
      setIsFiltered(true);
    }
  }, [hero]);

  // Function passed down to the HeroIcons component
  const setCurrentHero = e => {
    currentHero(e.currentTarget.id);
  };


  return (
    <div className="row">
      <HeroIcons setCurrentHero={setCurrentHero} hero={hero} />
      {isFiltered ? (
        <HeroShowcase description={description} />
      ) : (
        <CallToAction />
      )}
    </div>
  );
};

export default Heroes;
