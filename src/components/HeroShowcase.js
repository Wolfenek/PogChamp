import React from "react";
import HeroDescriptions from "../data/HeroDescriptions";

const HeroShowcase = (props) => {
  const currentID = props.hero;

  const heroDesc = HeroDescriptions.filter(description => {
    return description.id === currentID;
  });

  console.log(heroDesc);

  return <div>hello</div>;
};

export default HeroShowcase;
