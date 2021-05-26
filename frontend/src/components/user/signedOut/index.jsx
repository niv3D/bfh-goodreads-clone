import React, { useState } from "react";
import { Redirect } from "react-router";
import api from "../../../service/api";
import "./style.css";

function SignedOut() {
  const [state, setState] = useState("login");
  const [name, setName] = useState("");
  const [nameValid, setNameValid] = useState(true);
  const [number, setNumber] = useState("");
  const [numberValid, setNumberValid] = useState(true);
  const [username, setUsername] = useState("");
  const [usernameValid, setUsernameValid] = useState(true);
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [passwordValid, setPasswordValid] = useState(true);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setUsernameValid(true);
    setNumberValid(true);
    setPasswordValid(true);
    setNameValid(true);
    if (username === "") {
      setUsernameValid(false);
      setMessage("Enter username");
      return;
    }
    if (password === "") {
      setPasswordValid(false);
      setMessage("Enter password");
      return;
    }
    if (state === "login") {
      try {
        const res = await api.post("/login", { username, password });
        if (res.data.status) {
          localStorage.setItem("currentUser", JSON.stringify(res.data));
          if (localStorage.getItem("currentUser") == null) {
            console.log("Save Error!");
          }
          if (state?.from) return <Redirect to={state.from} />;
          else window.location.reload();
        } else {
          setMessage("Auth Error");
          setUsernameValid(false);
          setPasswordValid(false);
        }
      } catch (e) {
        setMessage("" + e);
        setUsernameValid(false);
        setPasswordValid(false);
      }
    } else {
      if (name === "") {
        setNameValid(false);
        setMessage("Enter Name");
        return;
      }
      if (number === "") {
        setNumberValid(false);
        setMessage("Enter Mobile Number");
        return;
      }
      if (password !== password2) {
        setPasswordValid(false);
        setMessage("Passwords not matching");
        return;
      }
      try {
        const res = await api.post("/register", {
          name,
          number,
          username,
          password,
        });
        if (res.data.status) {
          setMessage("Success, You can login now");
          setState("login");
        } else if (res.data.type === "username") {
          setUsernameValid(false);
          setMessage("username taken");
        } else if (res.data.type === "number") {
          setNumberValid(false);
          setMessage("number taken");
        } else setMessage("Unknown Error Occurred ");
      } catch (e) {
        setMessage("" + e);
      }
    }
  };

  return (
    <>
      <h4 style={{ width: "100%", textAlign: "center", marginTop: "12px" }}>
        {state}
      </h4>
      <div className="User-container">
        <div className="User-dp-container"></div>
        <div
          className="User-login"
          data-state={state === "login" ? "Log In" : "Sign Up"}
        >
          <form onSubmit={handleSubmit}>
            {state === "login" ? (
              <>
                <input
                  className={
                    usernameValid ? "input-field" : "input-field has-error"
                  }
                  type="text"
                  placeholder="username"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
                <input
                  className={
                    passwordValid ? "input-field" : "input-field has-error"
                  }
                  type="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <button className="input-button" type="submit">
                  Sign In
                </button>
              </>
            ) : (
              <>
                <input
                  className={
                    nameValid ? "input-field" : "input-field has-error"
                  }
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <input
                  className={
                    numberValid ? "input-field" : "input-field has-error"
                  }
                  type="text"
                  placeholder="Mobile Number"
                  value={number}
                  onChange={(e) => {
                    setNumber(e.target.value);
                  }}
                />
                <input
                  className={
                    usernameValid ? "input-field" : "input-field has-error"
                  }
                  type="text"
                  placeholder="username"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
                <input
                  className={
                    passwordValid ? "input-field" : "input-field has-error"
                  }
                  type="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <input
                  className={
                    passwordValid ? "input-field" : "input-field has-error"
                  }
                  type="password"
                  placeholder="re-enter password"
                  value={password2}
                  onChange={(e) => {
                    setPassword2(e.target.value);
                  }}
                />
                <button className="input-button" type="submit">
                  Sign Up
                </button>
              </>
            )}
          </form>
          <span className="User-message">{message ? message : ""}</span>
        </div>

        <div style={{ fontSize: "13px" }}>
          {state === "login" ? (
            <div>
              Don't have an account?{" "}
              <button
                onClick={() => {
                  setState("signup");
                  setMessage("");
                  setUsername("");
                  setUsernameValid(true);
                  setPassword("");
                  setPassword2("");
                  setPasswordValid(true);
                  setNumber("");
                  setNumberValid(true);
                  setName("");
                }}
                className="input-button"
              >
                Sign Up
              </button>
            </div>
          ) : (
            <div>
              Already have an Account?{" "}
              <button
                onClick={() => {
                  setState("login");
                  setMessage("");
                  setUsername("");
                  setUsernameValid(true);
                  setPassword("");
                  setPasswordValid(true);
                }}
                className="input-button"
              >
                Login
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default SignedOut;
