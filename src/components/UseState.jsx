import React from "react";
import Star from "./Star";

function UseState() {
  // IS STATE IMPORTANT TO KNOW

  /* // const result = React.useState("Yes");
  // useState array destructuring
  const [result, setResult] = React.useState("Yes");
  //NOTE: the second parameter's prefix is preffered to be set  For Eg [result, setResult] , [isImportant, setIsImportant], [hello, setHello] , etc
  // console.log(setResult);
  console.log(result);

  function handleEvent() {
    setResult("No");
  }

  return (
    <div className="state">
      <h1 className="state--title">Is state important to know?</h1>
      <div className="state--value">
        <h1 onClick={handleEvent}>{result}</h1>
      </div>
    </div>
  ); */

  // COUNTER PRACTICE

  /* let [count, setCount] = React.useState(0);
  function incrementCounter() {
    // setCount(count + 1); //we should not use count++, ++count, count = count + 1, count += 1 (we should not use = sign while using state)
    // OR
    // setCount(function (oldValue) {
    //   return oldValue + 1;
    // });
    // OR
    setCount((prevValue) => prevValue + 1);
  } */

  /* 
    * Note: if you ever need the old value of state
    * to help you determine the new value of state,
    * you should pass a callback function to your
    * state setter function instead of using
    * state directly. This callback function will
    * receive the old value of state as its parameter,
    * which you can then use to determine your new
    * value of state. 
  */
  
  
  /* function decrementCounter() {
    setCount((prevValue) => prevValue - 1);
  }

  return (
    <div className="counter">
      <button className="counter--minus" onClick={decrementCounter}>
        –
      </button>
      <div className="counter--count">
        <h1>{count}</h1>
      </div>
      <button className="counter--plus" onClick={incrementCounter}>
        +
      </button>
    </div>
  );  */

  // FLIPPING STATE BACK AND FORTH

  /* const [isGoingOut, setIsGoingOut] = React.useState(true);
  let going = "Yes";
  function handleClick() {
    setIsGoingOut((prevValue) => !prevValue); // !prevValue means opposite value eg true to false or false to true.
    // Another way: isGoingOut ? false : true
  }
  return (
    <div className="state">
      <h1 className="state--title">Do I feel like going out tonight?</h1>
      <div className="state--value" onClick={handleClick}>
        <h1>{isGoingOut ? "Yes" : "No"}</h1>
      </div>
    </div>
  ); */

  // THINGS ARRAY

  /* // const thingsArray = ["Thing 1", "Thing 2"];
  const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"]);

  function addItem() {
    setThingsArray((prevThingsArray) => {
      return [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`];
    });
  }

  const thingsElements = thingsArray.map((thing) => <p>{thing}</p>);

  return (
    <div>
      <button className="btn-addItems" onClick={addItem}>
        Add Item
      </button>
      {thingsElements}
    </div>
  ); */

  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false,
  });

  // let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png"; 

  function toggleFavorite() {
    setContact((prevContact) => ({
      ...prevContact,
      isFavorite: !prevContact.isFavorite,
    }));
  }

  return (
    <main>
      <article className="card">
        <img src="/images/user.png" className="card--image" />
        <div className="card--info">
          <Star isFilled={contact.isFavorite} handleClick={toggleFavorite} />
          <h2 className="card--name">
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="card--contact">{contact.phone}</p>
          <p className="card--contact">{contact.email}</p>
        </div>
      </article>
    </main>
  );
}

export default UseState;



// 1. You have 2 options for what you can pass in to a
//    state setter function (e.g. `setCount`). What are they?
// => 
//     a. New value of state (setCount(42))
//     b. Callback function - whatever the callback function returns === new value of state


// 2. When would you want to pass the first option (from answer
//    above) to the state setter function?
// => Whenever you don't need the previous value of state to determine
//     what the new value of state should be.


// 3. When would you want to pass the second option (from answer
//    above) to the state setter function?
// => Whenever you DO need the previous value to determine the new value