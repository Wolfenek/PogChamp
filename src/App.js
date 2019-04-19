import React from "react";
import Heroes from "../src/containers/Heroes";

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-heroes">
          <Heroes />
        </div>
      </div>
    </div>
  );
};

export default App;
