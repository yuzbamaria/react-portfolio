import React from "react";

function Col(props) {
  // size is a prop variable that represents the desired size of the Bootstrap column. 
  // split(" ") is used to split the size string into an array of individual size classes. 
  // For example, if props.size is "md-6", it will become ["md-6"].
  // map() is used to prepend each size with "col-" to form Bootstrap column classes.
  // it will become ["col-md-6"].
  // join(" ") is used to join the array of classes back into a space-separated string. 
  // So, the final value of size will be the string "col-md-6".
  const size = props.size.split(" ").map(size => "col-" + size).join(" ");

  return <div className={size}>{props.children}</div>;
}

export default Col;
