import React from "react";
import "./MessageBubble.css";

export default function MessageBubble(props) {
  return (
    <div className="message-bubble">
      <h4 className="h4 message-bubble__author">{props.author}</h4>
      <p className="message-bubble__body">{props.body || props.children}</p>
    </div>
  );
}
