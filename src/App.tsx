import React from "react";
import "./App.css";
import Great from "./components/Great";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Heading from "./components/Heading";
import { Oscar } from "./components/Oscar";

function App() {
  const personName = {
    firstName: "John",
    lastName: "Doe",
  };

  const nameList = [
    { first: "Bruce", last: "Wayne" },
    { first: "Clark", last: "Kent" },
    { first: "Princess", last: "Diana" },
  ];

  return (
    <div className="App">
      <div className="head">
        <Status status="success" />
        <Heading>Hello World!</Heading>
        <Oscar>
          <Heading>Oscar goes to Leonardo </Heading>
        </Oscar>
        <Great name="Kelvin" isLoggedIn={true} />
      </div>
    </div>
  );
}

export default App;
