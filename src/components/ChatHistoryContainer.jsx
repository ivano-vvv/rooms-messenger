import React from "react";
import ChatHistory from "./ChatHistory";
import { useSelector } from "react-redux";

export default function ChatHistoryContainer(props) {
  const messages = useSelector((state) => state.room.history);
  const authUserId = useSelector((state) => state.auth.id);
  const authUserName = useSelector((state) => state.auth.name);

  return (
    <ChatHistory
      {...props}
      messages={messages}
      authUser={{ id: authUserId, name: authUserName }}
    />
  );
}
