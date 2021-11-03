import React from "react";
import MewlaBlock from "../Mewla-block/Mewla-block.component";

import "./owe.style.css";

const Owe = ({change}) => {
  return (
    <div className="owe-wrapper">
      <h2>Customer Change</h2>
      <div className="change-owed-mewlas">
        {Object.keys(change).map((key) =>
          change[key] ? (
            // go through each of the element in the change object and show the ones that are not zero
            <MewlaBlock key={key} mewlaValue={key} amount={change[key]} />
          ) : null
        )}
      </div>
    </div>
  );
};

export default Owe;
