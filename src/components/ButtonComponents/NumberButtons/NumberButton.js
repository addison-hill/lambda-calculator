import React from "react";

const NumberButton = props => {
  console.log("props", props);
  return (
    <button className="number_button">
      {props.button}
    </button>
  );
};
export default NumberButton;

{/* Display a button element rendering the data being passed down from the parent container on props */}