import React from "react";
import "./ChatPanel.css";
import PanelHeader from "./PanelHeader";
import ChatInputContainer from "./ChatInputContainer";
import ChatHistoryContainer from "./ChatHistoryContainer";
import { useSelector } from "react-redux";

export default function ChatPanel(props) {
  const roomname = useSelector((state) => state.room.name);

  return (
    <div className={"chat-panel " + props.className}>
      <PanelHeader containerClass="chat-panel__container">
        {roomname || "Room"}
      </PanelHeader>
      <ChatHistoryContainer className="chat-panel__container" />
      <ChatInputContainer
        className="chat-panel__input"
        containerClass="chat-panel__container"
      />
    </div>
  );
}
