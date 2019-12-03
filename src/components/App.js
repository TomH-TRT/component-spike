import React from "react";
import Button from "./Button/";
import Header from "./Header";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <body>
        <br />
        <Button type="button" name="User with agreement" link="/agreements" />
        <br />
        <br />
        <Button
          type="button"
          name="User without agreement"
          link="https://kettlebell-coders-images.s3-eu-west-1.amazonaws.com/jsonobject.json"
        />
        <br />
        <br />
        <Button type="button" name="Example button" />
        <br />
      </body>
    </div>
  );
}

export default App;
