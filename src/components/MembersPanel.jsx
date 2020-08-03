import React, { useState } from "react";
import PanelHeader from "./PanelHeader";
import "./MembersPanel.css";
import LinkLikeButton from "./common/LinkLikeButton";
import MembersListBlockContainer from "./MembersListBlockContainer";
import LeaveRoomButton from "./LeaveRoomButton";

export default function MembersPanel(props) {
  const [copied, setCopiedStatus] = useState(false);

  function onGetIdClick() {
    props.handleGetIdClick();

    setCopiedStatus(true);

    setTimeout(setCopiedStatus, 3000, false);
  }

  return (
    <section className={"members-panel " + props.className}>
      <PanelHeader
        className="members-panel__header"
        containerClass="members-panel__container"
      >
        Room Members
      </PanelHeader>
      <div className="members-panel__container">
        <div className="members-panel__get-id-block flex-start-baseline">
          <LinkLikeButton
            onClick={onGetIdClick}
            className="h3 members-panel__get-link-button"
          >
            Get invite link
          </LinkLikeButton>
          {copied && (
            <p className="text2 members-panel__copied-indicator">✔ Copied</p>
          )}
        </div>
        <MembersListBlockContainer className="members-panel__list-block" />
      </div>
      <LeaveRoomButton
        className="members-panel__leave-button"
        containerClass="members-panel__container"
        onClick={props.handleLeftRoom}
      />
    </section>
  );
}
