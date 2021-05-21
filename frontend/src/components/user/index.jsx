import React, { useEffect, useState } from "react";
import checkAuth from "../../service/auth";
import SignedIn from "./signedIn";
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
      {signed? <SignedIn/>:<SignedOut/>} 
    </div>
  );
}

export default UserComponent;
