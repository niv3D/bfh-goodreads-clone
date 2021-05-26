import React from "react";
// import api from "../../../service/api";
import "./style.css";

function SignedIn() {
  return (
    <>
      <h4>&nbsp; &nbsp;options</h4>
      <div className="User-container">
        <div className="User-dp-container"></div>
        <div className="User-login">
          <button
            className="input-button"
            onClick={() => {
              localStorage.removeItem("currentUser");
              window.location.reload();
            }}
          >
            Sign Out
          </button>
          <a href="/addbook/">
            <button className="input-button">Add Book</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default SignedIn;
