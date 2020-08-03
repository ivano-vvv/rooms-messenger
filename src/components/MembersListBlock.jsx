import React from "react";
import "./MembersListBlock.css";
import MemberItem from "./MemberItem";

export default function MembersListBlock(props) {
  return (
    <div className={"members-list-block " + props.className}>
      <p className="members-list-block__amount">{`${props.users.length} member(s)`}</p>
      <div className="members-list-block__list">
        {props.users.map((u) => {
          return <MemberItem key={u.id} name={u.name} />;
        })}
      </div>
    </div>
  );
}
