import React from "react";
import "./button.scss";

export function Button({ text, className, hendleClick }) {
  return (
    <button
      className={className}
      onClick={() => {
        hendleClick();
      }}
    >
      {text}
    </button>
  );
}
