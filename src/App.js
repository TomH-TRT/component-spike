import React from "react";
import "./App.scss";
import Button from "./components/Button/index";

function App() {
  return (
    <div className="App">
      <body>
        <br />
        <Button name="Example" />
        <br />
        <br />
        <Button name="Really long string of text for the button " />
        <br />
        <br />
        <Button name="Submit" />
        <br />
      </body>
    </div>
  );
}

export default App;
