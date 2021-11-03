import React from "react";

import "./Mewla-block.styles.css";

const MewlaBlock = ({mewlaValue, amount}) => (
  <div className="mewla-block">
    <span className="amount">{amount}</span>
    <span className="value">{mewlaValue} Mewla</span>
  </div>
);

export default MewlaBlock;
