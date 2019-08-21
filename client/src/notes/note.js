import React from "react";
import { Link } from "react-router-dom";

function Note(props) {
  return (
    <div>
      <h4>{props.note.title}</h4>
      <p>{props.note.body}</p>
      <div>
        <button>
          <Link to={"/edit/" + props.note._id}>Edit</Link>
        </button>
        <button onClick={() => props.delete(props.note._id)}>Delete</button>
      </div>
    </div>
  );
}

export default Note;
