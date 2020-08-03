import React from "react";
import "./LoginBlock.css";
import LoginReduxForm from "./LoginForm";

export default function LoginBlock(props) {
  return (
    <div className={"login-block flex-column-start-center " + props.className}>
      <h1 className="h1 login-block__app-name">The Rooms</h1>
      <LoginReduxForm className="login-block__form" />
    </div>
  );
}
