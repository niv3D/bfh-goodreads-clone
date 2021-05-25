import React from "react";
import "./style.css";

function Filter() {
  return (
    <>
      <div className="Filter">
        <div className="Filter-genre">
          Genre :
          <br />
          <button>romance</button>
          <button>romance</button>
          <button>romance</button>
          <button>romance</button>
          <button>romance</button>
          <button>romance</button>
        </div>

        <div className="Filter-genre">
          Language :
          <br />
          <button></button>
        </div>
        <div className="Filter-genre">
          Author :
          <br />
          <button></button>
        </div>
      </div>
    </>
  );
}

export default Filter;
