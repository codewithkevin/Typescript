import React from "react";
import "./App.css";
import Great from "./components/Great";

function App() {
  return (
    <div className="App">
      <div className="head">
        <Great name="Kelvin" number={10} />
      </div>
    </div>
  );
}

export default App;
