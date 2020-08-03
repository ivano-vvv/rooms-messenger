import React from "react";
import LoginBlock from "./LoginBlock";
import "./Content.css";
import ChatPanel from "./ChatPanel";
import MembersPanelContainer from "./MembersPanelContainer";

export default function Content(props) {
  if (!props.isAuth) {
    return (
      <LoginBlock
        className={"content__login-block content__panel " + props.className}
      />
    );
  }

  return (
    <div className={"content flex-start-start " + props.className}>
      <MembersPanelContainer className="content__panel content__panel_members " />
      <ChatPanel className="content__panel content__panel_chat" />
    </div>
  );
}
