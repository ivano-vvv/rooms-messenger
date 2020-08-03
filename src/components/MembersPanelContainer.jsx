import React from "react";
import MembersPanel from "./MembersPanel";
import { useSelector } from "react-redux";
import sendLeavingRoom from "../DAL/sendLeavingRoom";
import copy from "copy-to-clipboard";

export default function MembersPanelContainer(props) {
  const roomId = useSelector((state) => state.room.id);

  function handleLeftRoom() {
    sendLeavingRoom(roomId);
  }

  function handleGetIdClick() {
    copy(roomId);
  }

  return (
    <MembersPanel
      {...props}
      handleLeftRoom={handleLeftRoom}
      handleGetIdClick={handleGetIdClick}
    />
  );
}
