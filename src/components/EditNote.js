import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";
import { useLocation, useNavigate } from "react-router-dom";

const EditNote = () => {
  // Declaring required variable and using Context
  let navi = useNavigate();
  const location = useLocation();
  const { id, it, i_d, ita } = location.state || {};
  const context = useContext(noteContext);
  const {editNote } = context;

  const [note, setNote] = useState({ title: it, description: i_d, tag: ita });

  const handleClick = () => {
    editNote(id, note.title, note.description, note.tag);
    navi("/notes");
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <>
      <h2 className="polo my-3" style={{ textAlign: "center", color: "white" }}>
        {" "}
        Update Note!{" "}
      </h2>
      <div className="container" style={{ width: "35rem" }}>
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
                    value={note.title}
                    placeholder="title"
                    onChange={onChange}
                  />
                  <label htmlFor="title">Title</label>
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
                    }}
                    id="description"
                    name="description"
                    value={note.description}
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
                    className="form-control"
                    style={{
                      border: "1px solid #B6D0E2",
                      borderRadius: "20px",
                    }}
                    id="tag"
                    name="tag"
                    value={note.tag}
                    placeholder="Tag*"
                    onChange={onChange}
                  />
                  <label htmlFor="tag">Tag</label>
                </div>
              </div>
              <button
                type="button"
                className="btn btn-outline-primary mx-2"
                onClick={handleClick}
              >
                Update
              </button>
              <button
                type="button"
                className="btn btn-outline-primary mx-2"
                onClick={() => {
                  navi("/notes");
                }}
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

export default EditNote;
