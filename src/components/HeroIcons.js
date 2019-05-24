import React, { useState } from "react";
import { Scrollbars } from "react-custom-scrollbars";

const HeroIcons = props => {
  //CODE BELOW REDUNDANT AS OF NOW - KEEPING IT FOR REFERENCE

  // const [height, currentHeight] = useState(window.innerHeight);
  // useEffect(() => {
  //   const setCurrentHeight = () => currentHeight(window.innerHeight);
  //   window.addEventListener("resize", setCurrentHeight);
  //   return () => {
  //     window.removeEventListener("resize", setCurrentHeight);
  //   };
  // }, []);
  const [active, setActive] = useState(null);
  const newActive = id => {
    setActive(id);
  };

  return (
    <div className="col-heroes col-heroes-rwd-height">
      <Scrollbars>
        <ul className="hero-list">
          {props.HeroImages.map(({ id, src, altTag }) => (
            <li key={id} id={id} onClick={props.setCurrentHero}>
              <img
                src={src}
                alt={altTag}
                onClick={() => {
                  newActive(id);
                }}
                style={{
                  backgroundColor: active === id && "yellowgreen"
                }}
              />
            </li>
          ))}
        </ul>
      </Scrollbars>
    </div>
  );
};

export default HeroIcons;
