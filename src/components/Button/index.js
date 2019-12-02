import React, { useState , useEffect}  from "react";
import "./Button.scss";

function Button(props) {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (clicked) {
      window.location.assign(props.link);
    }
  });

  return (
    <button name={props.name} onClick={() => setClicked(true)}  {...props}>
      {props.name}
    </button>
  );
}

export default Button;
