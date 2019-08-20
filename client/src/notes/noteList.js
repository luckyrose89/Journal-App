import React from "react";
import NoteForm from "./noteForm";
import Note from "./note";
import { withAppContext } from "../AppContext";

function NoteList(props) {
  const notes = props.notes.map(note => {
    return <Note key={note._id} title={note.title} body={note.body} />;
  });
  return (
    <div>
      <div>
        <NoteForm addNote={props.addNote} />
      </div>
      <div>Notes:</div>
    </div>
  );
}

export default withAppContext(NoteList);
