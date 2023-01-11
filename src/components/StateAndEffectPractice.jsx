import React from "react";
import WindowTracker from "./WindowTracker";

function StateAndEffectPractice() {
  const [show, setShow] = React.useState(true);

  function toggle() {
    setShow((prevValue) => !prevValue);
  }
  return (
    <div className="container">
      <button onClick={toggle}>Toggle WindowTracker</button>
      {show && <WindowTracker />}
    </div>
  );
}

export default StateAndEffectPractice;
