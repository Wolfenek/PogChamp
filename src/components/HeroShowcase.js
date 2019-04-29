import React from "react";

const HeroShowcase = props => {
  const { description } = props;
  console.log("from away", description);

  // function getSkills(skills2) {
  //   return Object.values(skills2)
  //     .reduce((acc, skillset) => {
  //       return [...acc, ...skillset];
  //     }, [])
  //     .map(skill => <li className="other-info">{skill}</li>);
  // }

  const content = description.map(({ id, name, img, role, hp }) => (
    <>
      <div className="self-center" key={id}>
        <div className="hero-header">
          <h1>{name}</h1>
          <h2>Role: {role}</h2>
        </div>
        <img src={img} />
      </div>
      <ul>
        <li>Total HP: {hp.total}</li>
        <li>Base HP: {hp.base_hp}</li>
        <li>Armor: {hp.armor}</li>
        <li>Shield: {hp.shield}</li>
      </ul>
      <ul>
        {description[0].skills.map(item => (
          <>
            <li className="other-info">
              <img src={item.img} />
            </li>
            <li className="other-info">{item.name}</li>
            <li className="other-info">{item.desc}</li>
            <li className="other-info">Damage: {item.dmg}</li>
            <li className="other-info">Healing: {item.healing}</li>
            <li className="other-info">Headshot: {item.headshot}</li>
          </>
        ))}
      </ul>
      <hr />
      {/* {description[0].skills[0].other.map(item => (
          <>
            <li className="other-info">{item}</li>
          </>
        ))} */}

      <hr />
    </>
  ));

  return (
    <div>
      <ul>{content}</ul>
    </div>
  );
};

export default HeroShowcase;
