import React from "react";
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

  return (
    <div className="col-heroes col-heroes-rwd-height">
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
