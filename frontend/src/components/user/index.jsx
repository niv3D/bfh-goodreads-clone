import React, { useEffect, useState } from "react";
import checkAuth from "../../service/auth";
import Loading from "./loading";
import SignedIn from "./signedIn";
import SignedOut from "./signedOut";
import "./style.css";

function UserComponent() {
  const [signed, setsigned] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function auth() {
      setsigned(await checkAuth());
      setLoading(false);
    }
    auth();
  }, []);
  return (
    <div
      className={window.location.pathname === "/" ? "User main" : "User closed"}
    >
      {loading ? <Loading /> : signed ? <SignedIn /> : <SignedOut />}
    </div>
  );
}

export default UserComponent;
