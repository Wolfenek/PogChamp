import React from "react";

const HeroShowcase = props => {
  console.log("from away", props.description);
  // const iterator = nameOfNestedObject => {
  //   for (let i = 0; i < nameOfNestedObject.length; i++) {
  //     return nameOfNestedObject[i];
  //   }
  // };

  const content = props.description.map(info => (
    <div key={info.id}>
      <h1>{info.name}</h1>
      <h2>Role: {info.role}</h2>
      <ul>
        <li>Total: {info.health_points.total}</li>
        <li>Base HP: {info.health_points.base_hp}</li>
        <li>Armor: {info.health_points.armor}</li>
        <li>Shield: {info.health_points.shield}</li>
      </ul>
    </div>
  ));

  return <div>{content}</div>;
};

export default HeroShowcase;
