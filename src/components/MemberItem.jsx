import React from "react";
import "./MemberItem.css";
import MemberIcon from "./MemberIcon";

export default function MemberItem(props) {
  return (
    <div className={"member-item flex-start-center " + props.className}>
      <MemberIcon className="member-item__icon">{props.name[0]}</MemberIcon>
      <h3 className="h3 member-item__name">{props.name}</h3>
    </div>
  );
}
