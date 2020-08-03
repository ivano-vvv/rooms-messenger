import React from "react";
import "./MemberIcon.css";

export default function MemberIcon(props) {
  return (
    <span className={"member-icon flex-center-center " + props.className}>
      <p className="member-icon__letter">{props.children}</p>
    </span>
  );
}
