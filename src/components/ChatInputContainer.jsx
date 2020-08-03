import React from "react";
import ChatInput from "./ChatInput";
import { useDispatch, useSelector } from "react-redux";
import { changeValue, resetValue } from "../redux/actions/chatFieldActions";
import sendNewMessage from "../DAL/sendNewMessage";

export default function ChatInputContainer(props) {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.chatField.value);
  const roomId = useSelector((state) => state.room.id);

  function handleInputChange(e) {
    dispatch(changeValue(e.target.value));
  }

  function handleSendClick(e) {
    e.preventDefault();

    if (value.trim() !== "") sendNewMessage(roomId, value);

    dispatch(resetValue());
  }

  return (
    <ChatInput
      {...props}
      value={value}
      onSendClick={handleSendClick}
      onChange={handleInputChange}
    />
  );
}
