import React, {Component} from "react";
import ChangeOwed from "./ChangeOwed.js";

/**
 * Uh oh, this is a legacy component written as a class!
 * Feel free to transform it into functional component using hooks
 */
class MewlaConverter extends Component {
  constructor() {
    super();
    this.state = {
      change: {}
    };

    this.calculateChange = this.calculateChange.bind(this);
  }

  calculateChange() {
    // ---
    // TODO: Implement your change-calculating logic here
    // ---
  }

  render() {
    return (
      <div>
        <form id="cash-calculator">
          <div className="cash-line">
            <input
              id="amountCharged"
              name="amountCharged"
              type="text"
              placeholder="We need"
            />
          </div>
          <div className="cash-line">
            <input
              id="amountTendered"
              name="amountTendered"
              type="text"
              placeholder="You pay"
            />
          </div>
          <button id="calculate" type="submit" onClick={this.calculateChange}>
            Calculate Change
          </button>
        </form>

        <div id="results">
          <ChangeOwed change={this.state.change} />
        </div>
      </div>
    );
  }
}

export default MewlaConverter;
