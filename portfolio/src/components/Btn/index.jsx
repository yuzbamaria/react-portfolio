import React from "react";
// import "./style.css";

function Btn(props) {
  return (
    <button
      // Event handler for the button click, provided through props.
      onClick={props.onClick} 
      // Combining Bootstrap class 'btn' with a custom class from props.
      className={`btn ${props["data-value"]}`} 
      data-value={props["data-value"]} 
      >
        Contact me
    </button>
  );
}

export default Btn;
