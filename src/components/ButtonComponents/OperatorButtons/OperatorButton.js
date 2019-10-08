import React from "react";

const OperatorButton = props => {
  console.log("operator props", props)
  return (
    <button className="operator_button">
      {props.button.char}
    </button>
  );
};
export default OperatorButton;

{/* Display a button element rendering the data being passed down from the parent container on props */}