import React, { useState } from "react";
import Header from "../../components/Header";
import Button from "../../components/Button";
import Licence from "../../components/Licence";

export default function Agreements() {
  const [checked, setChecked] = useState(false);

  const changeHandler = () => {
    setChecked(!checked);
    console.log(checked);
  };

  return (
    <div>
      <Header />
      <br />
      <Licence />
      <br />
      <label>
        <input data-test-id="agreement-checkbox" type="checkbox" checked={checked} onChange={changeHandler} />
      </label>
      <Button data-test-id="submit-agreement" disabled={!checked} link="https://kettlebell-coders-images.s3-eu-west-1.amazonaws.com/jsonobject.json" name="Submit" />
    </div>
  );
}
