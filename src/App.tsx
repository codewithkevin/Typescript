import React from "react";
import "./App.css";
import Great from "./components/Great";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

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
        <Great name="Kelvin" messageCount={10} isLoggedIn={true} />
        <Person name={personName} />
        <PersonList names={nameList} />
      </div>
    </div>
  );
}

export default App;
