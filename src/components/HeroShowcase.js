import React from "react";
import {ana} from "../data/ana";

const HeroShowcase = props => {
  console.log(ana);
  
  return (
    <div>
      <h1>{props.hero}</h1>
    </div>
  );
};

export default HeroShowcase;
