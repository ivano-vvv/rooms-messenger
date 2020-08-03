import React from "react";
import "./LinkLikeButton.css";

export default function LinkLikeButton(props) {
  return (
    <button
      onClick={props.onClick}
      className={"link-like-button " + props.className}
    >
      {props.children}
    </button>
  );
}
