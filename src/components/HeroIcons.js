import React from "react";

const HeroIcons = props => {
  return (
    <li key={props.id}>
      <img src={props.src} alt={props.altTag} />
    </li>
  );
};

export default HeroIcons;
