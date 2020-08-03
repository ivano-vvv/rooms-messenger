import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Content from "./Content";
import handleServerEvents from "../DAL/handleServerEvents";
import checkForSessionStorageData from "../DAL/checkForSessionStorageData";
import sendDataToRejoinRoom from "../DAL/sendDataToRejoinRoom";

export default function ContentContainer(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleServerEvents());
  }, []);

  const isAuth = useSelector((state) => state.auth.isAuth);

  useEffect(() => {
    if (!isAuth && checkForSessionStorageData()) {
      sendDataToRejoinRoom();
    }
  }, []);

  return <Content {...props} isAuth={isAuth} />;
}
