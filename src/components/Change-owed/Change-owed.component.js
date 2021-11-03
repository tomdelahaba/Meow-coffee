import React from "react";
import PropTypes from "prop-types";

import "./Change-owed.styles.css";
import Owe from "../Owe/owe.component";
import NoOwe from "../No-owe/no-owe.component";

import "./Change-owed.styles.css";

/**
 * Implement your change renderer in this component.
 * Change is passed in via this.props.change.
 * Note you may need to use more lifecycle methods!
 */
const ChangeOwed = ({change}) => {
  // Return your renderer here

  // accumulation is counted so we know if there is anything to return to user / customer
  const acc = Object.values(change).reduce(
    (accumulation, value) => (accumulation = accumulation + value)
  );

  return (
    <div className="change-owed-wrapper">
      {/* if there is anything to return, go ahead otherwise show cat fact. At this point, we know user / customer
       /* provided values that are ok (we have something to return OR customer / user paid exact amount) */}
      {acc ? <Owe change={change}></Owe> : <NoOwe></NoOwe>}
    </div>
  );
};

ChangeOwed.propTypes = {
  change: PropTypes.object.isRequired
};

export default ChangeOwed;
