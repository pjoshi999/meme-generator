import React from "react";
import boxData from "../boxData";
import Box from "./Box";

function Boxes() {
  // const [user, setUser] = React.useState("Bob");

  const [squares, setSquares] = React.useState(boxData);
  const squareElements = squares.map((square) => (
    <Box
      darkMode={true}
      key={square.id} //It will not pass the id to props as it is intended to do some other work in react. So we can pass any other name instead of key.
      id={square.id}
      on={square.on}
      toggle={toggle}
    />
  ));

  function toggle(id) {
    console.log(id);
    // The following method is imperative way of changing the state using setState method
    /* setSquares((prevSquares) => {
      const newSquare = [];
      for (let i = 0; i < prevSquares.length; i++) {
        const currentSquare = prevSquares[i];
        if (currentSquare.id === id) {
          const updatedSquare = {
            ...currentSquare,
            on: !currentSquare.on,
          };
          newSquare.push(updatedSquare);
        } else {
          newSquare.push(currentSquare);
        }
      }
      return newSquare;
    }); */

    // The following method is declarative way of changing the state using setState method
    setSquares((prevSquares) => {
      return prevSquares.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square;
      });
    });
  }

  return <main>{squareElements}</main>;
}

export default Boxes;