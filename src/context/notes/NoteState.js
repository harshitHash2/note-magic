import React from "react";
import { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props)=>{
    const notesInitial = [
        {
          "_id": "61322f19553781a8ca8d0e06",
          "user": "6131dc5e3e4037cd4734a066",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2021-09-03T14:20:09.509Z",
          "__v": 0
        },
        {
          "_id": "61322f19553781a8ca8d0e08",
          "user": "6131dc5e3e4037cd4734a066",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2021-09-03T14:20:09.668Z",
          "__v": 0
        },
        {
          "_id": "61322f19553781a8ca8d0e08",
          "user": "6131dc5e3e4037cd4734a066",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2021-09-03T14:20:09.668Z",
          "__v": 0
        },
        {
          "_id": "61322f19553781a8ca8d0e08",
          "user": "6131dc5e3e4037cd4734a066",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2021-09-03T14:20:09.668Z",
          "__v": 0
        },
        {
          "_id": "61322f19553781a8ca8d0e08",
          "user": "6131dc5e3e4037cd4734a066",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2021-09-03T14:20:09.668Z",
          "__v": 0
        },
        {
          "_id": "61322f19553781a8ca8d0e08",
          "user": "6131dc5e3e4037cd4734a066",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2021-09-03T14:20:09.668Z",
          "__v": 0
        },
        {
          "_id": "61322f19553781a8ca8d0e08",
          "user": "6131dc5e3e4037cd4734a066",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2021-09-03T14:20:09.668Z",
          "__v": 0
        },
      ]

    const [notes, setNotes] = useState(notesInitial);

    //Add a Note
    // const addnewNote = (note)=> {
    const addnewNote = (title, description, tag)=> {
        // TODO API Call
        const note={
          "_id": "61322f19553781a8ca8d0e89",
          "user": "6131dc5e3e4037cd4734a066",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "2021-09-03T14:20:09.668Z",
          "__v": 0
        };
        setNotes(notes.concat(note));

    }


    //Delerte a Note
    const deleteNote= (id)=>{
      const newNotes = notes.filter((note)=>{ return note._id!==id})
      setNotes(newNotes);

    }

    // Edit a note
    const editNote= (id, title, description, tag)=> {
      
    }


    return (
    <noteContext.Provider value={{notes, addnewNote, deleteNote, editNote,}}>
        {props.children}
    </noteContext.Provider>
    )
}

export default NoteState;

// import React, { useState } from "react";
// import noteContext from "./noteContext";

// const NoteState = (props) => {
//   const notesInitial = [
//     {
//       _id: "61322f19553781a8ca8d0e06",
//       user: "6131dc5e3e4037cd4734a066",
//       title: "My Title",
//       description: "Please wake up early",
//       tag: "personal",
//       date: "2021-09-03T14:20:09.509Z",
//       __v: 0,
//     },
//     {
//       _id: "61322f19553781a8ca8d0e08",
//       user: "6131dc5e3e4037cd4734a066",
//       title: "My Title",
//       description: "Please wake up early",
//       tag: "personal",
//       date: "2021-09-03T14:20:09.668Z",
//       __v: 0,
//     },
//     // Add more notes if necessary
//   ];

//   const [notes, setNotes] = useState(notesInitial);

//   // Add a Note
//   const addNote = (title, description, tag) => {
//     // TODO: API Call to add note
//     const note = {
//       _id: Date.now().toString(),
//       user: "6131dc5e3e4037cd4734a066",
//       title,
//       description,
//       tag,
//       date: new Date().toISOString(),
//       __v: 0,
//     };
//     setNotes([...notes, note]);
//   };

//   // Delete a Note
//   const deleteNote = (id) => {
//     // TODO: API Call to delete note
//     const newNotes = notes.filter((note) => note._id !== id);
//     setNotes(newNotes);
//   };

//   // Edit a Note
//   const editNote = (id, title, description, tag) => {
//     // TODO: API Call to edit note
//     const newNotes = notes.map((note) => {
//       if (note._id === id) {
//         return { ...note, title, description, tag };
//       }
//       return note;
//     });
//     setNotes(newNotes);
//   };

//   return (
//     <noteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
//       {props.children}
//     </noteContext.Provider>
//   );
// };

// export default NoteState;