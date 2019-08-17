import React from "react";

function Note(props) {
  return (
    <div>
      <h4>{props.note.title}</h4>
      <p>{props.note.body}</p>
      <div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
}

export default Note;
