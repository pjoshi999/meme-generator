import React from "react";

function ApiCall() {
  const [starWarsData, setStarWarsData] = React.useState({});
  const [count, setCount] = React.useState(1);

  React.useEffect(function () {
    console.log("component rendered");
    fetch(`https://swapi.dev/api/people/${count}`)
      .then((res) => res.json())
      .then((data) => setStarWarsData(data));
  }, [count]);

  /* React.useEffect(() => {
    console.log("Effect function ran");
  }, [count]); //[0] (original array) compared to [1] (new array) (when you first click add button then count becomes 1, so [1]), if both are different then useEffect will re-run the function inside it..
  // [count] here is an dependency array. It means that it determines when will the useEffect function be defined and how many times it will get rendered or run.
  useEffect function will be rendered atleast once when component loads.
 */
  return (
    <div>
      <button onClick={() => setCount((prevValue) => prevValue + 1)}>
        Get next character
      </button>
      <br />
      <h2>The count is {count}</h2>
      <br />
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  );
}

export default ApiCall;

/* 
1. What is a "side effect" in React? What are some examples?
- Any code that affects an outside system.
- local storage, API, websockets, two states to keep in sync


2. What is NOT a "side effect" in React? Examples?
- Anything that React is in charge of.
- Maintaining state, keeping the UI in sync with the data, 
  render DOM elements


3. When does React run your useEffect function? When does it NOT run
   the effect function?
- As soon as the component loads (first render)
- On every re-render of the component (assuming no dependencies array)
- Will NOT run the effect when the values of the dependencies in the
  array stay the same between renders


4. How would you explain what the "dependecies array" is?
- Second paramter to the useEffect function
- A way for React to know whether it should re-run the effect function
- It allows React to determine whether it should re-run the effect function or not. It compares original array with new array and if they are
  different then it will re-run the function inside of useEffect.
*/
