import React from "react";
import uuidv5 from "uuid";

const HeroShowcase = ({ description }) => {
  // Function displaying info about hero skills
  const showSkills = () => {
    return description[0].skills.map(item => (
      <div className="skill-info-grid" key={uuidv5()}>
        <div className="skill-icon">
          <img src={item.img} alt="" />
        </div>
        <div className="skill-desc">
          <h2>{item.name}</h2>
          <p>{item.desc}</p>
        </div>
        <div className="more-info">
          <p className="flavor-text">{item.flavor}</p>
        </div>
      </div>
    ));
  };

  //Displaying core info about game characters
  const content = description.map(({ id, name, img, role, flavor, hp }) => (
    <React.Fragment key={uuidv5()}>
      <div className="main-info-grid" key={id}>
        <div className="hero-header">
          <h1>{name}</h1>
          <h2>Role: {role}</h2>
          <p className="main-flavor-text">{flavor}</p>
        </div>
        <div className="main-img-container">
          <img src={img} alt="" />
        </div>
      </div>
      <ul className="list-inline">
        <li>Total HP: {hp.total}</li>
        <li>Base HP: {hp.base_hp}</li>
        <li>Armor: {hp.armor}</li>
        <li>Shield: {hp.shield}</li>
      </ul>
      {showSkills()}
    </React.Fragment>
  ));

  return <div className="col-showcase txt-center">{content}</div>;
};

export default HeroShowcase;
