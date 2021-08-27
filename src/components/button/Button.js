import React from "react";
import "./Button.css";

const Button = (props) => {
  if (props.btnType === true || props.btnType === false) {
    return (
      <button
        className="likeBtn"
        onClick={() => {
          props.likeHandler(props.id);
        }}
      >
        {" "}
        {props.btnType ? "Unlike" : "Like"}{" "}
      </button>
    );
  } else if (props.btnType === "remove") {
    return (
      <button
        className="removeBtn"
        onClick={() => props.removeHandler(props.id)}
      >
        remove
      </button>
    );
  } else {
    return (
      <button className="clearBtn" onClick={props.clearHandler}>
        Clear All
      </button>
    );
  }
};

export default Button;
