import React from "react";

function FormPractice() {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    confirmPass: "",
    newsletter: true,
  });

  function handleSubmit(event) {
    event.preventDefault();
    if (formData.password === formData.confirmPass) {
      console.log("Succesfully signed up");
    } else {
      console.log("Passwords do not match");
      return;
    }

    if (formData.newsletter) {
      console.log("Thanks for signing up for our newsletter!");
    }
  }

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={formData.email}
          onChange={handleChange}
          name="email"
          placeholder="Email Address"
        />
        <input
          type="password"
          value={formData.password}
          onChange={handleChange}
          name="password"
          placeholder="Password"
        />

        <input
          type="password"
          value={formData.confirmPass}
          onChange={handleChange}
          name="confirmPass"
          placeholder="Confirm Password"
        />

        <input
          type="checkbox"
          name="newsletter"
          id="newsletter"
          checked={formData.newsletter}
          onChange={handleChange}
        />
        <label htmlFor="newsletter">I want to join the newsletter</label>

        <br />
        <br />

        <button type="submit" className="btn-submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default FormPractice;
