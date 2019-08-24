import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Header, Footer } from "../src/Landing/index";
import { NoteList, EditNote } from "../src/notes/index";
import { Login, Signup, ProtectRoutes } from "../src/auth/index";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <ProtectRoutes path="/notes" component={NoteList} />
        <Route exact path="/" render={() => <Redirect to="/notes" />} />
        <ProtectRoutes path="/edit/:id" component={EditNote} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
