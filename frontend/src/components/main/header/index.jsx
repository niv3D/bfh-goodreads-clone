import React, { useState } from "react";
import "./style.css";

function Header() {
  const [query,setQuery]= useState("");
  return (
    <>
      <div className="Header">
        <form className="search-form" action={"/search/"+query}>
          <input className="search-field" type="text" value={query} onChange={(e)=>{
            setQuery(e.target.value);
          }}/>
          <button className="search-button" type="submit">
            ?
          </button>
        </form>
      </div>
    </>
  );
}

export default Header;
