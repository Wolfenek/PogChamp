import React from "react";

const HeroShowcase = props => {
  const { description } = props;
  console.log("from away", description);

  function showSkills() {
    return description[0].skills.map(item => (
      <>
        <div className="skill-info-grid">
          <div className="skill-icon">
            <img src={item.img} />
          </div>
          <div className="skill-desc">
            <h2>{item.name}</h2>
          </div>
        </div>
        <li className="other-info">{item.name}</li>
        <li className="other-info">{item.desc}</li>
        <li className="other-info">Damage: {item.dmg}</li>
        <li className="other-info">Healing: {item.healing}</li>
        <li className="other-info">Headshot: {item.headshot}</li>
      </>
    ));
  }

  const content = description.map(({ id, name, img, role, hp }) => (
    <>
      <div className="main-info-grid" key={id}>
        <div className="hero-header">
          <h1>{name}</h1>
          <h2>Role: {role}</h2>
        </div>
        <div>
          <img src={img} />
        </div>
      </div>
      <ul className="list-inline">
        <li>Total HP: {hp.total}</li>
        <li>Base HP: {hp.base_hp}</li>
        <li>Armor: {hp.armor}</li>
        <li>Shield: {hp.shield}</li>
      </ul>
      {showSkills()}
    </>
  ));

  return <div>{content}</div>;
};

export default HeroShowcase;
