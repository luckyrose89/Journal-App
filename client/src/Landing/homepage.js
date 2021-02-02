import React from "react";
import { Link } from "react-router-dom";
import { Grid, makeStyles, Button, Box, Typography } from "@material-ui/core";

import girlImage from "../assets/images/cute-girl-writing-journal.jpg";

const useStyles = makeStyles({
  container: {
    padding: "100px 0px 0px",
    height: "100vh",
  },
  description: {
    textAlign: "center",
    maxWidth: "500px",
    margin: "0 auto",
  },
  landingImg: {
    objectFit: "contain",
    maxWidth: "100%",
    height: "auto",
    display: "block",
  },
});

const Homepage = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={2}
      justify="center"
      alignItems="center"
      className={classes.container}
    >
      <Grid item md={1} />
      <Grid item xs={10} md={5}>
        <img
          src={girlImage}
          alt="girl writing journal with cat"
          className={classes.landingImg}
        />
      </Grid>
      <Grid item xs={10} md={5} className={classes.description}>
        <Typography paragraph>
          Welcome to Thoughts & More, your very own personal journal to document
          your days.
        </Typography>
        <Typography paragraph>
          You can use this journal to effectively gauge the broad range of
          emotions that your entries represent and use your dashnoard to see how
          you've been feeling lately.
        </Typography>
        <Typography paragraph>
          So what are you waiting for? Start now.
        </Typography>
        <Typography paragraph>
          <Button variant="contained" color="primary">
            <Link to="/signup">Sign Up Now</Link>
          </Button>
        </Typography>
      </Grid>
      <Grid item md={1} />
    </Grid>
  );
};

export default Homepage;
