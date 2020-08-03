import React from "react";
import "./ChatHistory.css";
import Message from "./Message";
import ScrollToBottom from "react-scroll-to-bottom";

export default function ChatHistory(props) {
  return (
    <ScrollToBottom
      className={"chat-history " + props.className}
      behavior="smooth"
    >
      <section className="chat-history__content-section">
        {props.messages.map((m) => {
          return (
            <Message
              key={m.id}
              isService={m.isService}
              author={!m.isService ? m.author.name : null}
              body={m.body}
              isSent={!m.isService ? m.author.id === props.authUser.id : null}
            />
          );
        })}
      </section>
    </ScrollToBottom>
  );
}
