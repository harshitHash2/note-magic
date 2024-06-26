import React from "react";
import { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
  // Declaring the variables for required to connect to backend
  const host = "https://note-magic-backend.onrender.com";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  // Fetch all Notes of the authenticated user
  const getNotes = async () => {
    try {
      // API Call
      const response = await fetch(`${host}/user/fetchallnotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });
      const json = await response.json();
      // Setting notes variable
      setNotes(json);
    } catch (error) {
      // alert("Unable to fetch notes. Something Went Wrong");
    }
  };

  // Add a new note for the authenticated user
  const addnewNote = async (title, description, tag) => {
    try {
      // API Call
      const response = await fetch(`${host}/user/newnote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({ title, description, tag }),
      });
      const note = await response.json();
      // Concatenating to the fetched notes variable in frontend
      setNotes(notes.concat(note));
    } catch (error) {
      alert("Unable to add new note");
    }
  };

  // Deleting a note
  const deleteNote = async (id) => {
    try {
      // API Call
      // const response = 
      await fetch(`${host}/user/deletenote/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });

      // const json = response.json();

      // Filtering out the note with specific id
      const newNotes = notes.filter((note) => {
        return note._id !== id;
      });
      setNotes(newNotes);
    } catch (error) {
      alert("Unable to delete");
    }
  };

  // Updating a note
  const editNote = async (id, title, description, tag) => {
    try {
      // API Call
      // const response = 
      await fetch(`${host}/user/note/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({ title, description, tag }),
      });

      // const json = await response.json();

      let newNotes = JSON.parse(JSON.stringify(notes));
      for (let index = 0; index < newNotes.length; index++) {
        const element = newNotes[index];
        if (element._id === id) {
          newNotes[index].title = title;
          newNotes[index].description = description;
          newNotes[index].tag = tag;
          break;
        }
      }
      setNotes(newNotes);
    } catch (error) {
      alert("Unable to Update");
    }
  };

  return (
    <noteContext.Provider
      value={{ notes, addnewNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
