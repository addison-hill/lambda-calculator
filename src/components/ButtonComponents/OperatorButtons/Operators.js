import React, { useState } from "react";
import { operators } from "../../../data";
import OperatorButton from "./OperatorButton";

//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  const [operator, setOperator] = useState(operators)
  console.log("operators", useState());
  return (
    <div className="button_container">
      {operator.map((button, index) => (
        <OperatorButton key={index} button={button} />
      ))}
    </div>
  );
};
export default Operators;
{/* STEP 3 - Use .map() to iterate over your array data and return a button
component matching the name on the provided file. Pass
it any props needed by the child component*/}
// STEP 2 - add the imported data to state