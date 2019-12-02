import React from "react";
import "./Button.scss";

function Button(props) {
  return (
    <button type="button" name={props.name} {...props}>
      {props.name}
    </button>
  );
}

export default Button;
