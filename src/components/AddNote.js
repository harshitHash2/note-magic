import React, { useContext, useState, useRef } from "react";
import noteContext from "../context/notes/noteContext";
import { useNavigate } from "react-router-dom";

const AddNote = () => {
  // Declaring required variable and using Context
  let navi = useNavigate();
  const context = useContext(noteContext);
  const { notes, addnewNote } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const closeHandle = () => {
    navi("/notes");
  };

  const handleClick = () => {
    addnewNote(note.title, note.description, note.tag);
    navi("/notes");
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h2 className="polo my-3" style={{ textAlign: "center", color: "white" }}>
        {" "}
        Add a New Note!{" "}
      </h2>
      <div className="container " style={{ width: "35rem" }}>
        <div className="col">
          <div className="card my-4" style={{ borderRadius: "40px" }}>
            <div className="card-body">
              <div className="input-group mb-3">
                <span className="input-group-text">Title:</span>
                <div className="form-floating mx-3">
                  <input
                    type="text"
                    className="form-control"
                    style={{
                      border: "1px solid #B6D0E2",
                      borderRadius: "20px",
                    }}
                    id="title"
                    name="title"
                    placeholder="title"
                    onChange={onChange}
                  />
                  <label htmlFor="title">title</label>
                </div>
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text">Description:</span>
                <div className="form-floating mx-3">
                  <input
                    type="text"
                    className="form-control"
                    style={{
                      border: "1px solid #B6D0E2",
                      borderRadius: "20px",
                      height: "180px",
                    }}
                    id="description"
                    name="description"
                    placeholder="Description"
                    onChange={onChange}
                  />
                  <label htmlFor="description">Description</label>
                </div>
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text">Tag:</span>
                <div className="form-floating mx-3">
                  <input
                    type="text"
                    className="form-control "
                    style={{
                      border: "1px solid #B6D0E2",
                      borderRadius: "20px",
                    }}
                    id="tag"
                    name="tag"
                    placeholder="Tag*"
                    onChange={onChange}
                  />
                  <label htmlFor="tag">Tag</label>
                </div>
              </div>
              <button
                type="button"
                class="btn btn-outline-primary mx-2"
                onClick={handleClick}
              >
                Add
              </button>
              <button
                type="button"
                class="btn btn-outline-primary mx-2"
                onClick={closeHandle}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNote;
