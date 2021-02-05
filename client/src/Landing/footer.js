import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    width: "100%",
  },
  footer: {
    padding: theme.spacing(2),
    marginTop: "auto",
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1" align="center">
            Made with ❤️ & lots of hard work by
            <a href="https://github.com/luckyrose89">
              <span style={{ color: "#e12675" }}> Divya Mathur</span>
            </a>
          </Typography>
        </Container>
      </footer>
    </div>
  );
}

export default Footer;
