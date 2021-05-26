import React from "react";
import "./style.css";

function Filter() {
  return (
    <>
      <div className="Filter">
        <div className="Filter-genre">
          Genre :
          <a href="/">
            <button>all</button>
          </a>
          <br />
          <a href="/genre/romance">
            <button>romance</button>
          </a>
          <a href="/genre/action">
            <button>action</button>
          </a>
          <a href="/genre/fiction">
            <button>fiction</button>
          </a>
          <a href="/genre/adventure">
            <button>adventure</button>
          </a>
          <a href="/genre/mystery">
            <button>mystery</button>
          </a>
          <a href="/genre/Meditation">
            <button>meditation</button>
          </a>
          <a href="/genre/Self-Help">
            <button>self help</button>
          </a>
        </div>

        {/* <div className="Filter-genre">
          Language :
          <br />
          <button></button>
        </div>
        <div className="Filter-genre">
          Author :
          <br />
          <button></button>
        </div> */}
      </div>
    </>
  );
}

export default Filter;
