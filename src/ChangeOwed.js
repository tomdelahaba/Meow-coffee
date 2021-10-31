import React from "react";
import PropTypes from "prop-types";

/**
 * Implement your change renderer in this component.
 * Change is passed in via this.props.change.
 * Note you may need to use more lifecycle methods!
 */
const ChangeOwed = ({change}) => {
  // Return your renderer here
  return <div />;
};

ChangeOwed.propTypes = {
  change: PropTypes.object.isRequired
};

export default ChangeOwed;
