import React from "react";
import memeData from "../memeData";

export default function Form() {
  // const [memeImage, setMemeImage] = React.useState("");
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });
  const [allMemes, setAllMemes] = React.useState([]);

  function handleChange(event) {
    const { name, value } = event.target;

    // We can return arrow function in both implicit and explicit way
    //explicit return of arrow function
    setMeme((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  React.useEffect(() => {
    // ----- API call using fetch (remove async from arrow function) -----

    // fetch("https://api.imgflip.com/get_memes")
    //   .then((res) => res.json())
    //   .then((data) => setAllMemes(data.data.memes));

    //----- API call using async/await -----

    /**
    useEffect takes a function as its parameter. If that function
    returns something, it needs to be a cleanup function. Otherwise,
    it should return nothing. If we make it an async function, it
    automatically returns a promise instead of a function or nothing.
    Therefore, if you want to use async operations inside of useEffect,
    you need to define the function separately inside of the callback
    function, as seen below:
    */
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemes(data.data.memes);
    }
    getMemes();
  }, []);
  console.log(allMemes);

  function getMemeImage() {
    /* We dont need below line anymore */
    // const memesArray = allMemes.data.memes;

    const randomNo = Math.floor(Math.random() * allMemes.length) + 1; // + 1 is for 100th image
    const url = allMemes[randomNo].url;
    // yellow brackets is for returning the value  (down below)
    //implicit return of arrow function
    setMeme((prevValue) => ({
      ...prevValue,
      randomImage: url,
    }));
  }
  return (
    <>
      <div className="form-elements">
        <div className="inputs">
          <input
            type="text"
            placeholder="Top"
            onChange={handleChange}
            name="topText"
            value={meme.topText}
          />
          <input
            type="text"
            placeholder="Bottom"
            onChange={handleChange}
            name="bottomText"
            value={meme.bottomText}
          />
        </div>
        <div className="btn">
          <button id="memeBtn" onClick={getMemeImage}>
            {" "}
            {/*onClick={getMemeImage}  -  if we use getMemeImage()*/}
            Get a New Meme Image 🖼
          </button>
        </div>
      </div>

      <div className="img-container">
        <img id="image" src={meme.randomImage} alt="" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </>
  );
}

/*

1. How would you describe the concept of "state"?

State is an built-in React object that contains information about the component. Everytime the state of the object changes, component re-renders. We can change the value of state object using setState. It can be modified based on user action or network changes.
A way for React to remember saved values from within a component. This is similar to declaring variables from within a component, with a few added bonuses (which we'll get to later).


2. When would you want to use props instead of state?
Anytime you want to pass data into a component so that component can determine what will get displayed on the screen.


3. When would you want to use state instead of props?
Anytime you want a component to maintain some values from within the component. (And "remember" those values even when React re-renders the component).


4. What does "immutable" mean? Are props immutable? Is state immutable?
Unchanging. Props are immutable. State is mutable.

*/
