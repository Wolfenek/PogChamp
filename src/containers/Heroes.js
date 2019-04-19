import React from "react";
import HeroList from "../components/HeroList";

const Heroes = () => {
  return (
    <div className="row">
      <div className="col-heroes">
        <HeroList />
      </div>
      <div className="col-showcase">
        <h1>Hero showcase here</h1>
      </div>
    </div>
  );
};

export default Heroes;
