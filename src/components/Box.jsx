import React from "react";

function Box(props) {
  // console.log(props.id);
  // const [on, setOn] = React.useState(props.on);
  const styles = {
    // backgroundColor: "white",
    // borderRadius: "10px",
    // backgroundColor: props.darkMode ? "#222222" : "yellow",
    backgroundColor: props.on ? "white" : "transparent",
  };

  // function toggle() {
  //   setOn((prevValue) => !prevValue);
  // }

  return (
    <div
      style={styles}
      className="box"
      onClick={() => props.toggle(props.id)}
    ></div>
  );
}

export default Box;
