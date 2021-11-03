import React, {useState} from "react";
import ChangeOwed from "./components/Change-owed/Change-owed.component.js";

/**
 * Uh oh, this is a legacy component written as a class!
 * Feel free to transform it into functional component using hooks
 */

const MewlaConverter = () => {
  const [amounts, setAmounts] = useState({
    amountCharged: "",
    amountTendered: ""
  });
  const [change, setChange] = useState(null);

  const handleChange = (event) => {
    const {value, name} = event.target;

    setAmounts({...amounts, [name]: value});
  };

  const {amountCharged, amountTendered} = amounts;

  const calculateChange = (event) => {
    // ---
    // TODO: Implement your change-calculating logic here
    // ---
    event.preventDefault();

    // first check if user provided numbers and if tendered amount is higher than charged (we cant return negative values)
    if (
      !isNaN(amountCharged) &&
      !isNaN(amountTendered) &&
      Number(amountTendered) >= Number(amountCharged)
    ) {
      // initiate the object
      const mewlas = {1: 0, 3: 0, 7: 0, 21: 0, 33: 0, 100: 0};
      let returnValue = amounts.amountTendered - amounts.amountCharged;
      // reverse the mewlas object so we get from the highest one
      Object.keys(mewlas)
        .reverse()
        // and for each element
        .forEach((key) => {
          // (a - (a % b)) / b seems a little bit better than Math.floor when we are talking about precision,
          // lets have a = -100 and b = 3, Math.floor(a/b) is -34 while the equation is -33
          mewlas[key] = (returnValue - (returnValue % key)) / key;
          // for next iteration
          returnValue = returnValue % key;
        });

      // set the object / result
      setChange(mewlas);
    } else {
      // if there are not a numbers or tendered is lower than charged, "reset" the object / result, irrelevant state
      setChange(null);
    }
  };

  return (
    <div>
      <form id="cash-calculator">
        <div className="cash-line">
          <label>We need</label>
          <input
            id="amountCharged"
            name="amountCharged"
            type="text"
            placeholder="We need"
            onChange={handleChange}
          />
          <span className="unit">Mewla</span>
        </div>
        <div className="cash-line">
          <label>You pay</label>
          <input
            id="amountTendered"
            name="amountTendered"
            type="text"
            placeholder="You pay"
            onChange={handleChange}
          />
          <span className="unit">Mewla</span>
        </div>
        <button id="calculate" type="submit" onClick={calculateChange}>
          Calculate Change
        </button>
      </form>

      <div id="results">{change ? <ChangeOwed change={change} /> : null}</div>
    </div>
  );
};

export default MewlaConverter;
