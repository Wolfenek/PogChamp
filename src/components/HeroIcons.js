import React, { useState, useEffect } from "react";
import { Scrollbars } from "react-custom-scrollbars";

const HeroIcons = props => {
  const [height, currentHeight] = useState(window.innerHeight);

  useEffect(() => {
    const setCurrentHeight = () => currentHeight(window.innerHeight);
    window.addEventListener("resize", setCurrentHeight);
    return () => {
      window.removeEventListener("resize", setCurrentHeight);
    };
  }, []);

  return (
    <div className="col-heroes" style={{ height: `${height}px` }}>
      <Scrollbars>
        <ul className="hero-list">
          {props.HeroImages.map(({ id, src, altTag }) => (
            <li key={id} id={id} onClick={props.setCurrentHero}>
              <img src={src} alt={altTag} />
            </li>
          ))}
        </ul>
      </Scrollbars>
    </div>
  );
};

export default HeroIcons;
