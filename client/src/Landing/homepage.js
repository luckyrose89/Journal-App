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
  },
});

const Homepage = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      className={classes.container}
    >
      <Grid item xs={1} />
      <Grid item xs={5}>
        <img src={girlImage} alt="girl writing journal with cat" />
      </Grid>
      <Grid item xs={5} className={classes.description}>
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
      <Grid item xs={1} />
    </Grid>
  );
};

export default Homepage;
