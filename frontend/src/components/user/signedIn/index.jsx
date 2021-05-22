import React from "react";
// import api from "../../../service/api";
import "./style.css";

function SignedIn() {
  return (
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
      </div>
    </div>
  );
}

export default SignedIn;
