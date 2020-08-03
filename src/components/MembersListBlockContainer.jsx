import React from "react";
import { useSelector } from "react-redux";
import MembersListBlock from "./MembersListBlock";

export default function MembersListBlockContainer(props) {
  const users = useSelector((state) => state.room.users);

  return <MembersListBlock {...props} users={users} />;
}
