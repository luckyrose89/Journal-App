import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "../src/Landing/header";
import Footer from "../src/Landing/footer";
import Login from "../src/auth/login";
import Signup from "../src/auth/signup";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
