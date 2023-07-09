import React from "react";
import "./modal.scss";

export function Modal({ header, actions, text, onClose }) {
  return (
    <div className="modalWraper">
      <div
        className="modalBg"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
      ></div>
      <div className="modal">
        <div className="modalHeder">
          <h1>{header}</h1>
          <div
            className="closePointer"
            onClick={(e) => {
              onClose();
            }}
          >
            X
          </div>
        </div>
        <p className="modalText">{text}</p>
        <div>{actions}</div>
      </div>
    </div>
  );
}
