import React from "react";

// takes a single argument props, which represents the properties passed to the component.
function Container(props) {
  // The style attribute is assigned dynamically using the props.style object, allowing you to pass custom styles to the component.
  // The content of the <div> is determined by props.children, 
  // which represents the child components or elements passed to the Container component. 
  return <div className="container background min-vh-100 text-center" style={props.style}>{props.children}</div>;
}

export default Container;
