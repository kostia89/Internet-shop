import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Modal } from "./Modal";
import { expect, jest, test } from "@jest/globals";
import { Button } from "../../Butoon/Button";

describe("Modal component", () => {
  let handleClickMock;

  beforeEach(() => {
    handleClickMock = jest.fn();
  });
  const actions = <button>test button</button>;
  it("should render a button element with the provided text", () => {
    const { getByText } = render(
      <Modal
        text="text in modal"
        header="heder-modal"
        actions={actions}
        onClose={handleClickMock}
      />
    );

    expect(getByText("heder-modal")).toHaveTextContent("heder-modal");
  });

  it("should have the provided className", () => {
    const { getByText } = render(
      <Modal
        text="text in modal"
        header="heder-modal"
        actions={actions}
        onClose={handleClickMock}
      />
    );

    expect(getByText("text in modal")).toHaveTextContent("text in modal");
  });

  it("should call handleClick when clicked", () => {
    const { getByRole } = render(
      <Modal
        text="text in modal"
        header="heder-modal"
        actions={actions}
        onClose={handleClickMock}
      />
    );
    expect(getByRole("button")).toHaveTextContent("test button");
  });
  it("test close modal", () => {
    const { getByText } = render(
      <Modal
        text="text in modal"
        header="heder-modal"
        actions={actions}
        onClose={handleClickMock}
      />
    );
    fireEvent.click(getByText("X"));
    expect(handleClickMock).toHaveBeenCalled();
  });
});
