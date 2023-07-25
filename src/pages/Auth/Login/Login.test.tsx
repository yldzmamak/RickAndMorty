import React from "react";
import { BrowserRouter } from "react-router-dom";

import { act, cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Input } from "antd";

import Login from "./Login";


const onChangeMock = jest.fn();
const loginMock = jest.fn();

describe("Login Component", () => {

  afterEach(() => cleanup());

  it("should render the form with required fields", () => {
    render(
      <BrowserRouter>
        <Login loading={false} login={loginMock} />
      </BrowserRouter>
    );

    expect(screen.getByText("label.phone")).toBeInTheDocument();
    expect(screen.getByText("label.password")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "button.login" })).toBeInTheDocument();
  });

  it("input phone number correctly", async () => {
    const value = "+90 (541) 999 99 99";

    render(<Input onChange={onChangeMock} />);

    const phoneInput = screen.getByTestId("phoneInput");

    act(() => {
      userEvent.type(phoneInput, value);
    });

    await waitFor(() => expect(phoneInput).toHaveValue(value));
  });

  it("submits the form with correct values", async () => {
    render(
      <BrowserRouter>
        <Login loading={false} login={loginMock} />
      </BrowserRouter>
    );

    const value = "+90 (541) 999 99 99";
    const phoneInput = screen.getByTestId("phoneInput");
    const passwordInput = screen.getByTestId("passwordInput");
    const loginButton = screen.getByTestId("loginButton");

    fireEvent.change(phoneInput, { target: { value: value } });
    fireEvent.change(passwordInput, { target: { value: "120205" } });
    fireEvent.click(loginButton);

    await waitFor(() => expect(loginMock).toHaveBeenCalledWith({
      CLIENT_USERNAME: value,
      CLIENT_PASSWORD: "120205",
      CLIENTCODE: "0",
      VERIFICATION_METHOD: "",
      VERIFY_CODE: "",
      VERIFY_NUMBER: ""
    }));
  });

});