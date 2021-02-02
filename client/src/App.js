import React from "react";
import { Route, Switch } from "react-router-dom";
import { Grid } from "@material-ui/core";

import { Header, Footer, Homepage } from "../src/Landing/index";
import { NoteList, EditNote, ReadNote } from "../src/notes/index";
import { Login, Signup, ProtectRoutes } from "../src/auth/index";

function App() {
  return (
    <Grid container direction="column" style={{ backgroundColor: "#fef6e4" }}>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <ProtectRoutes path="/notes" component={NoteList} />
        <ProtectRoutes path="/edit/:id" component={EditNote} />
        <ProtectRoutes path="/notes/:id" component={ReadNote} />
      </Switch>
      <Footer />
    </Grid>
  );
}

export default App;
