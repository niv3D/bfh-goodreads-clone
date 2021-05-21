import React, { useState, useEffect } from "react";
import api from "../../../service/api";
import "./style.css";

function SignedOut() {
  const [state, setState] = useState("login");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [numberValid, setNumberValid] = useState(true);
  const [sex, setSex] = useState("");
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
        if (res.data.status) setMessage("Success");
        else {
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
      if (password !== password2) {
        setPasswordValid(false);
        setMessage("Passwords not matching");
        return;
      }
      if (name === "" || sex === "" || number === "") {
        setMessage("Fill up boi");
        return;
      }
      try {
        const res = await api.post("/register", {
          name,
          number,
          sex,
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
        }
      } catch (e) {
        setMessage("" + e);
      }
    }
  };

  return (
    <>
      <div className="User-container">
        <div className="User-dp-container"></div>
        <div className="User-login">
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
                  placeholder="password again"
                  value={password2}
                  onChange={(e) => {
                    setPassword2(e.target.value);
                  }}
                />
              </>
            )}
          </form>
          {message ? message : ""}
        </div>
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
                setPasswordValid(true);
                setNumber("");
                setNumberValid(false);
                setName("");
                setSex("");
              }}
            >
              Create An Account
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
            >
              Login
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default SignedOut;
