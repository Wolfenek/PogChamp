import React from "react";

const HeroShowcase = props => {
  const { description } = props;
  console.log("from away", description);

  /* <ul>
        {description[0].skill_1.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul> */

  function getSkills(skills) {
    return Object.values(skills)
      .reduce((acc, skillset) => {
        return [...acc, ...skillset];
      }, [])
      .map(skill => <li>{skill}</li>);
  }

  const content = description.map(({ id, name, role, hp, ...skills }) => (
    <div key={id}>
      <h1>{name}</h1>
      <h2>Role: {role}</h2>
      <ul>
        <li>Total HP: {hp.total}</li>
        <li>Base HP: {hp.base_hp}</li>
        <li>Armor: {hp.armor}</li>
        <li>Shield: {hp.shield}</li>
        {getSkills(skills)}
        <hr />
      </ul>
      <hr />
    </div>
  ));

  return (
    <div>
      <ul>{content}</ul>
    </div>
  );
};

export default HeroShowcase;
