import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import checkAuth from "../../service/auth";
import BookDetails from "./pages/book";
import LandingPage from "./pages/landing";
import Addbook from "./pages/addBook";
import SearchPage from "./pages/search";
import GenrePage from "./pages/genre";

function PrivateRoute({ component: Component, ...rest }) {
  const [loading, setLoading] = useState(true);
  const [signedIn, setSignedIn] = useState(false);

  useEffect(() => {
    checkAuth().then((res) => {
      setSignedIn(res.signedIn);
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
          <PrivateRoute exact path="/addbook" component={Addbook} />
          <Route exact path="/book/:isbn" component={BookDetails} />
          <Route exact path="/search/:query" component={SearchPage} />
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/genre/:genre" component={GenrePage} />
          <Route
            component={() => {
              return <h1> 404 :[</h1>;
            }}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default MainComponent;
