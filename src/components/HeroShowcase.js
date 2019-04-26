import React from "react";

const HeroShowcase = props => {
  const { description } = props;
  console.log("from away", description[0]);

  
    /* <ul>
        {description[0].skill_1.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul> */
  

  const content = description.map(item => (
    <div key={item.id}>
      <h1>{item.name}</h1>
      <h2>Role: {item.role}</h2>
      <ul>
        <li>Total: {item.health_points.total}</li>
        <li>Base HP: {item.health_points.base_hp}</li>
        <li>Armor: {item.health_points.armor}</li>
        <li>Shield: {item.health_points.shield}</li>
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
