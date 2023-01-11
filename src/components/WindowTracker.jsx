import React from "react";

function WindowTracker() {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  function watchWidth() {
    console.log("Setting up");
    setWindowWidth(window.innerWidth);
  }

  React.useEffect(() => {
    window.addEventListener("resize", watchWidth);

    return function () {
      console.log("Cleaning up");
      window.removeEventListener("resize", watchWidth);
    };
  }, []);

  return <h1 className="window">Window Width: {windowWidth}</h1>;
}

export default WindowTracker;
