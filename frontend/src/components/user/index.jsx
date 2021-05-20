import React, { useEffect, useState } from "react";
import checkAuth from "../../service/auth";
import SignedOut from "./signedOut";
import "./style.css";


function UserComponent() {
    const [signed , setsigned] = useState(false);
    useEffect(()=>{
        async function auth() {
            setsigned(await checkAuth())
        }
        auth();
    },[])
    return (
    <div className={window.location.pathname === "/" ? "User main" : "User closed"}>
      {signed? <h1>signedIn</h1>:<SignedOut/>} 
    </div>
  );
}

export default UserComponent;
