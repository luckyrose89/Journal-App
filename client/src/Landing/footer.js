import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: "0px",
  },
  footer: {
    padding: theme.spacing(2),
    marginTop: "auto",
    backgroundColor: "white",
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <footer className={classes.footer}>
        <Typography variant="body1" align="center">
          Made with ❤️ by{" "}
          <a href="https://github.com/luckyrose89">
            <span style={{ color: "#e12675" }}>Divya Mathur</span>
          </a>
        </Typography>
      </footer>
    </div>
  );
}

export default Footer;
