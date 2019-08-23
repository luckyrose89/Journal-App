import React from "react";
import NoteForm from "./noteForm";
import Note from "./note";
import { withAppContext } from "../AppContext";

function NoteList(props) {
  const notes = props.notes.map(note => {
    return <Note key={note._id} note={note} delete={props.deleteNote} />;
  });
  return (
    <div className="content-wrapper">
      <div>
        <NoteForm addNote={props.addNote} />
      </div>
      <div>
        Notes:
        {notes}
      </div>
    </div>
  );
}

export default withAppContext(NoteList);
