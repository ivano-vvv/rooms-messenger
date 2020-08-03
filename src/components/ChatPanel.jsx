import React from "react";
import "./ChatPanel.css";
import PanelHeader from "./PanelHeader";
import ChatInputContainer from "./ChatInputContainer";
import ChatHistoryContainer from "./ChatHistoryContainer";

export default function ChatPanel(props) {
  return (
    <div className={"chat-panel " + props.className}>
      <PanelHeader containerClass="chat-panel__container">
        Room Name
      </PanelHeader>
      <ChatHistoryContainer className="chat-panel__container" />
      <ChatInputContainer
        className="chat-panel__input"
        containerClass="chat-panel__container"
      />
    </div>
  );
}
