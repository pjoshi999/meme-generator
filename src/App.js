import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import UseState from "./components/UseState";
import Header from "./components/Header";
import Body from "./components/Body";
import Boxes from "./components/Boxes";
import boxData from "./boxData";
import MemeForm from "./components/MemeForm";
import FormPractice from "./components/FormPractice";
import ApiCall from "./components/ApiCall";
import StateAndEffectPractice from "./components/StateAndEffectPractice";

function App() {
  return (
    <>
      <Navbar />
      <Form />
      {/* <UseState /> */}
      {/* <Header user={user} /> */}
      {/* <Body user={user} /> */}
      {/* <Boxes /> */}
      {/* <MemeForm /> */}
      {/* <FormPractice /> */}
      {/* <ApiCall /> */}
      {/* <StateAndEffectPractice /> */}
    </>
  );
}

export default App;
