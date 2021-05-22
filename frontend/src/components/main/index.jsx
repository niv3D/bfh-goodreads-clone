import React, { useState, useEffect } from "react";
import "./style.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import checkAuth from "../../service/auth";
import BookDetails from "./pages/book";

function PrivateRoute({ component: Component, ...rest }) {
  const [loading, setLoading] = useState(true);
  const [signedIn, setSignedIn] = useState(false);

  useEffect(() => {
    checkAuth().then((res) => {
      setSignedIn(res);
      setTimeout(() => {
        setLoading(false);
      }, [500]);
    });
  }, []);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        loading ? (
          <h1>loading</h1>
        ) : signedIn ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

function MainComponent() {
  return (
    <div className="Main">

      <Router>
        <Switch>
          <PrivateRoute
            exact
            path="/addbook"
            component={() => {
              return <h1>signedIn</h1>;
            }}
          />
          <Route exact path="/book/:isbn" component={BookDetails} />
          <Route exact path="/" component={BookDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default MainComponent;
