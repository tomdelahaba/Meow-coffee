import React, {useEffect, useState} from "react";

import "./no-owe.styles.css";

const NoOwe = () => {
  const [result, setResult] = useState({
    message: "",
    error: ""
  });

  // We will use "useEffect" at the mounting of this component.
  // With this one we wont re-render this component when its not necessary (results didnt change) and we wont need
  // to ask the API even when we do not have to.
  useEffect(() => {
    const fetchFunc = async () => {
      // fetch the API call
      const response = await fetch(
        "https://mtpgyho8j0.execute-api.us-east-1.amazonaws.com/default/catFacts"
      );
      // get the response message
      const message = await response.json();
      // decide if we get error or not
      if (message.message) {
        setResult({message: message.message});
      } else {
        setResult({error: message.error});
      }
    };

    // async useEffect is not possible, so we have to figure it out this way
    fetchFunc();
  }, []);

  return (
    <div className="no-owe-wrapper">
      <h2>You paid the exact amount!</h2>
      {/* Check if we had error and if we had, show the message for customer / user so he is informed */}
      {/* otherwise show the cat fact */}
      {result.error ? (
        <div className="error">{result.error}</div>
      ) : (
        <div className="cat-fact">
          <h3>Here's cat fact for you:</h3>
          <span>{result.message}</span>
        </div>
      )}
    </div>
  );
};

export default NoOwe;
