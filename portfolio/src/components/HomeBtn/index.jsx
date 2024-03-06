import React from "react";
// import "./style.css";

export default function HomeBtn(props) {
  return (
    <button
      // Event handler for the button click, provided through props.
      onClick={props.onClick} 
      // Combining Bootstrap class 'btn' with a custom class from props.
      className="btn btn-primary"
      >
        Contact me
    </button>
  );
}
