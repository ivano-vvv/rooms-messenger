import React from "react";
import "./button.css";
import Loader from "./loader";

export default function Button(props) {
  const buttonClassName = (props) => {
    if (props.isFetching) return "button button_fetching " + props.className;

    if (props.appearance === "second")
      return "button button_second " + props.className;

    return "button " + props.className;
  };

  return (
    <button {...props} className={buttonClassName(props)}>
      {!props.isFetching ? (
        props.children
      ) : (
        <Loader className="button__loader" />
      )}
    </button>
  );
}
