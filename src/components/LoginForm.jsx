import React from "react";
import "./LoginForm.css";
import { useSelector } from "react-redux";
import Input from "./common/input";
import Button from "./common/button";
import {
  Form,
  Field,
  reduxForm,
  getFormValues,
  getFormSyncErrors,
} from "redux-form";
import sendDataToCreateRoom from "../DAL/sendDataToCreateRoom";
import sendDataToJoinRoom from "../DAL/sendDataToJoinRoom";
import required from "../validation/required";
import { normalizeName, normalizeID } from "../validation/normalize";

function LoginForm(props) {
  const values = useSelector((state) => getFormValues("login")(state));
  const errors = useSelector((state) => getFormSyncErrors("login")(state));

  function handleCreateClick(e) {
    e.preventDefault();

    if (!errors.username && !errors.roomname) {
      sendDataToCreateRoom(values);
    } else {
      alert(
        `${errors.username ? "Username: " + errors.username + "\n" : ""}${
          errors.roomname ? "Room name: " + errors.roomname : ""
        }`
      );
    }
  }

  function handleJoinClick(e) {
    e.preventDefault();

    if (!errors.username && !errors.roomId) {
      sendDataToJoinRoom(values);
    } else {
      alert(
        `${errors.username ? "Username: " + errors.username + "\n" : ""}${
          errors.roomId ? "Room ID: " + errors.roomId : ""
        }`
      );
    }
  }

  return (
    <Form className={"login-form flex-column-start-center " + props.className}>
      <div className="login-form__form-section">
        <div className="login-form__input-block login-form__input-block_username">
          <p className="login-form__label text1" htmlFor="username">
            Username
          </p>
          <Field
            name="username"
            component={Input}
            type="text"
            validate={required}
            normalize={normalizeName}
          />
        </div>
        <div className="login-form__input-block">
          <p className="login-form__label text1" htmlFor="roomname">
            Room Name
          </p>
          <Field
            name="roomname"
            component={Input}
            type="text"
            validate={required}
            normalize={normalizeName}
          />
        </div>
      </div>
      <Button onClick={handleCreateClick} disabled={false}>
        Create
      </Button>
      <div className="login-form__divider flex-sb-center">
        <div className="login-form__line"></div>
        <span>or</span>
        <div className="login-form__line"></div>
      </div>
      <div className="login-form__form-section">
        <p className="login-form__label text1" htmlFor="roomId">
          Room ID
        </p>
        <Field
          name="roomId"
          component={Input}
          type="text"
          validate={required}
          normalize={normalizeID}
        />
      </div>
      <Button onClick={handleJoinClick} appearance="second">
        Join
      </Button>
    </Form>
  );
}

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

export default LoginReduxForm;
