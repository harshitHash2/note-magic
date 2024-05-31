import React, { useContext, useEffect} from "react";
import Noteitem from "./Noteitem";

import noteContext from "../context/notes/noteContext";

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
          className="btn btn-secondary"
          onClick={() => {
            navigator("/addnote");
          }}
        >
          <i className="fa-duotone fa-message-plus"></i> Add Note
        </button>
      </div>
      <div className="container my-3">
        <div className="row">
        
          {notes.map((note) => {

            return <Noteitem key={note._id} note={note} polo={note._id}/>;
          })}
        </div>
      </div>
    </>
  );
};

export default Notes;
