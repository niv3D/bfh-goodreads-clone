import React from "react";
import "./style.css";

function Header() {
  return (
    <>
      <div className="Header">
        <form className="search-form" onSubmit="">
          <input className="search-field" type="text"></input>
          <button className="search-button" type="submit">
            ?
          </button>
        </form>
      </div>
    </>
  );
}

export default Header;
