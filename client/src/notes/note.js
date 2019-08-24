import React from "react";
import { Link } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  CardActions,
  Button
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
        <div>
          <Typography color="textPrimary">{props.note.body}</Typography>
        </div>
      </CardContent>
      <CardActions className="cardHeadStyle">
        <Link
          to={"/edit/" + props.note._id}
          style={{ color: "#fff", textDecoration: "none", paddingRight: 4 }}
        >
          <Button variant="contained" color="primary">
            Edit
            <EditIcon />
          </Button>
        </Link>

        <Button
          variant="contained"
          color="secondary"
          onClick={() => props.delete(props.note._id)}
        >
          Delete
          <DeleteIcon style={{ paddingleft: 5 }} />
        </Button>
      </CardActions>
    </Card>
  );
}

export default Note;
