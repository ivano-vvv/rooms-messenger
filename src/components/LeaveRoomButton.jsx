import React from "react";
import "./LeaveRoomButton.css";

export default function LeaveRoomButton(props) {
  return (
    <button
      className={
        "leave-room-button " + props.className + " " + props.containerClass
      }
      onClick={props.onClick}
    >
      Left this Room
    </button>
  );
}
