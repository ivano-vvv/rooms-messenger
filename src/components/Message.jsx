import React from "react";
import "./Message.css";
import MemberIcon from "./MemberIcon";
import MessageBubble from "./MessageBubble";

export default function Message(props) {
  if (props.isService) {
    return (
      <div className="message service-message flex-center-center">
        <h3 className="h3 service-message__body">{props.body}</h3>
      </div>
    );
  }

  return (
    <div
      className={
        "message user-message flex-start-start " + sentTypeClass(props.isSent)
      }
    >
      <MemberIcon className="user-message__author-icon">
        {props.author[0]}
      </MemberIcon>
      <MessageBubble author={props.author}>{props.body}</MessageBubble>
    </div>
  );

  function sentTypeClass(isSent) {
    return isSent ? "user-message_sent" : "";
  }
}
