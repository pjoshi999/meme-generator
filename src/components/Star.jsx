import React from "react";

function Star(props) {
  const starIcon = props.isFilled ? "star-filled.png" : "star-empty.png";
  return <img className="card--favorite" src={`/images/${starIcon}`} alt="" onClick={props.handleClick}/>;
}

export default Star;
