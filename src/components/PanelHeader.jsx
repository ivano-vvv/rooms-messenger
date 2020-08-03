import React from "react";
import "./PanelHeader.css";

export default function PanelHeader(props) {
  return (
    <header className={"panel-header " + props.className}>
      <h2
        className={
          "h2 panel-header__heading " +
          (props.containerClass || "panel-header__container ")
        }
      >
        {props.children}
      </h2>
      <hr className="panel-header__divider" />
    </header>
  );
}
