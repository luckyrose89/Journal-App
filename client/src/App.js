import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "../src/Landing/header";
import Footer from "../src/Landing/footer";
import NoteList from "../src/notes/noteList";
import Login from "../src/auth/login";
import Signup from "../src/auth/signup";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/notes" component={NoteList} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
