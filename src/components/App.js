import React from "react";
import "./App.scss";
import Button from "./Button/";

function App() {
  
return (
    <div className="App">
      <body>
        <br />
        <Button type="button" name="User with agreement" link="http://www.example.com"/>
        <br />
        <br />
        <Button type="button" name="User without agreement" link="http://www.google.com"/>
        <br />
        <br />
        <Button type="button" name="Example button" />
        <br />
      </body>
    </div>
  );
}

export default App;
