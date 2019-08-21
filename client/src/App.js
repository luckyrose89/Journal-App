import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import ProtectRoutes from "../src/auth/protectedRoutes";
import Header from "../src/Landing/header";
import Footer from "../src/Landing/footer";
import Landing from "../src/Landing/landing";
import NoteList from "../src/notes/noteList";
import EditNote from "../src/notes/editNotes";
import Login from "../src/auth/login";
import Signup from "../src/auth/signup";

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <ProtectRoutes path="/notes" component={NoteList} />
        <Route exact path="/" render={() => <Redirect to="/notes" />} />
        <Route path="/edit/:id" component={EditNote} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
