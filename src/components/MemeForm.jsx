import React from "react";

function MemeForm() {
  /* const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");

  console.log(firstName, lastName);

  function handleFirstNameChange(event) {
    // console.log(event.target.value);
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    // console.log(event.target.value);
    setLastName(event.target.value);
  } */

  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: true,
    employment: "",
    favColor: "",
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First Name"
        name="firstName"
        onChange={handleChange}
        value={formData.firstName}
      />
      <input
        type="text"
        placeholder="Last Name"
        name="lastName"
        onChange={handleChange}
        value={formData.lastName}
      />
      <input
        type="email"
        placeholder="xyz@abc.com"
        name="email"
        onChange={handleChange}
        value={formData.email}
      />
      <textarea
        placeholder="Comments"
        name="comments"
        onChange={handleChange}
        value={formData.comments}
      />
      <input
        type="checkbox"
        name="isFriendly"
        id="iFriendly"
        onChange={handleChange}
        checked={formData.isFriendly}
      />
      <label htmlFor="isFriendly">Are you Friendly</label>
      <fieldset>
        <legend>Employment Status</legend>

        <input
          type="radio"
          name="employment"
          value="unemployed"
          id="unemployed"
          checked={formData.employment === "unemployed"}
          onChange={handleChange}
        />
        <label htmlFor="unemployed">Unemployed</label>

        <input
          type="radio"
          name="employment"
          value="part-time"
          id="part-time"
          checked={formData.employment === "part-time"}
          onChange={handleChange}
        />
        <label htmlFor="unemployed">Part-time</label>

        <input
          type="radio"
          name="employment"
          value="full-time"
          id="full-time"
          checked={formData.employment === "full-time"}
          onChange={handleChange}
        />
        <label htmlFor="unemployed">Full-time</label>
      </fieldset>
      <label htmlFor="favColor">What is your favorite color?</label>
      <br />
      <select
        id="favColor"
        value={formData.favColor}
        onChange={handleChange}
        name="favColor"
      >
        <option value="">-- Choose --</option>
        <option value="red">Red</option>
        <option value="orange">Orange</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="indigo">Indigo</option>
        <option value="violet">Violet</option>
      </select>
      <br />
      <br />
      <button type="submit">Submit</button>
      {/* This button inside form element will be of type submit by default */}
    </form>
  );
}

export default MemeForm;

/* In input tag name attribute should match with state object */

/* 
1. In a vanilla JS app, at what point in the form submission
   process do you gather all the data from the filled-out form?
=> Right before the form is submitted.


2. In a React app, when do you gather all the data from
   the filled-out form?
=> As the form is being filled out. The data is all held in local state.


3. Which attribute in the form elements (value, name, onChange, etc.)
   should match the property name being held in state for that input?
=> `name` property.


4. What's different about saving the data from a checkbox element
   vs. other form elements?
=> A checkbox uses the `checked` property to determine what should
be saved in state. Other form elements use the `value` property instead.


5. How do you watch for a form submit? How can you trigger
   a form submit?
=> - Can watch for the submit with an onSubmit handler on the `form` element.
   - Can trigger the form submit with a button click.
*/
