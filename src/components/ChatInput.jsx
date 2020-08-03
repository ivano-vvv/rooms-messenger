import React from "react";
import "./ChatInput.css";

export default function ChatInput(props) {
  return (
    <div className={props.className}>
      <form className="chat-input" onSubmit={props.onSendClick}>
        <input
          type="text"
          className={"chat-input__field " + props.containerClass}
          placeholder="Type your message..."
          value={props.value}
          onChange={props.onChange}
        />
        <button className="chat-input__submit">
          <svg
            className="chat-input__icon"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              className="chat-input__icon-background"
              width="24"
              height="24"
              rx="12"
            />
            <path
              d="M7 11.716H14.196L11.48 9H13.426L16.926 12.5L13.426 16H11.508L14.21 13.298H7V11.716Z"
              fill="white"
            />
          </svg>
        </button>
      </form>
    </div>
  );
}
