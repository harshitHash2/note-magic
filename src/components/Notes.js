import React, { useContext, useEffect, useState } from "react";
import Noteitem from "./Noteitem";
// import NoteContext from "../context/notes/noteContext"
import noteContext from "../context/notes/noteContext";
import AddNote from "./AddNote";
import { useNavigate } from "react-router-dom";

const Notes = () => {
  // Declaring required variable and using Context
  let navigator = useNavigate();
  const context = useContext(noteContext);
  const { notes, getNotes } = context;

  // For calling the fetch notes methodon every effect change
  useEffect(() => {
    getNotes();
  });


  return (
    <>
      <div className="container my-4" style={{ textAlign: "center" }}>
        <button
          type="button"
          class="btn btn-secondary"
          onClick={() => {
            navigator("/addnote");
          }}
        >
          <i class="fa-duotone fa-message-plus"></i> Add Note
        </button>
      </div>
      <div className="container my-3">
        <div className="row">
          {/* <React.Fragment> */}
          {notes.map((note) => {
            // return <h1>jg</h1>
            // console.log(note)

            return <Noteitem note={note} />;
          })}

          {/* </React.Fragment> */}
        </div>
      </div>
    </>
  );
};

export default Notes;
