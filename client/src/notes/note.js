import React from "react";
import { Link } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ComputerIcon from "@material-ui/icons/Computer";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";

function Note(props) {
  return (
    <Card>
      <CardHeader
        title={props.note.title}
        titleTypographyProps={{ align: "left" }}
        className="cardHeadStyle"
      />
      <CardContent>
        <div style={{ width: "12rem" }}>
          <Typography color="textPrimary" noWrap>
            {props.note.body}
          </Typography>
        </div>
      </CardContent>
      <CardActions className="cardHeadStyle">
        <Link
          to={"/read/" + props.note._id}
          style={{ color: "#fff", textDecoration: "none", paddingRight: 4 }}
        >
          <Button variant="contained" color="primary">
            <span style={{ marginRight: "4px" }}>Read</span>
            <ComputerIcon />
          </Button>
        </Link>
        <Link
          to={"/edit/" + props.note._id}
          style={{ color: "#fff", textDecoration: "none", paddingRight: 4 }}
        >
          <Button variant="contained" color="primary">
            <span>Edit</span>
            <EditIcon />
          </Button>
        </Link>

        <Button
          variant="contained"
          color="secondary"
          onClick={() => props.delete(props.note._id)}
        >
          <span>Delete</span>
          <DeleteIcon style={{ paddingleft: "5px" }} />
        </Button>
      </CardActions>
    </Card>
  );
}

export default Note;
