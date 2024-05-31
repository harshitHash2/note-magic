import React from "react";
import { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props)=>{
  const host = "http://localhost:5000";
    const notesInitial = [];
    const [notes, setNotes] = useState(notesInitial);

    //Add a Note
    const getNotes = async () => {
      // API Call 
      const response = await fetch(`${host}/user/fetchallnotes`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": localStorage.getItem('token'),
        }
      });
      const json = await response.json();
      // console.log(json);
      setNotes(json);
    }
  


    // Add New Note 
    const addnewNote = async (title, description, tag)=> {
        // TODO API Call
        const response = await fetch(`${host}/user/newnote`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            "auth-token": localStorage.getItem('token'),
          },
          body: JSON.stringify({title, description, tag})
        });


        const note= await response.json();
        setNotes(notes.concat(note));

    }


    //Delerte a Note
    // const deleteNote= (id)=>{

      const deleteNote = async (id) => {
        // API Call
        console.log(id);
        const response = await fetch(`${host}/user/deletenote/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            "auth-token": localStorage.getItem('token'),
          }
        });

        const json = response.json(); 

      const newNotes = notes.filter((note)=>{ return note._id!==id})
      setNotes(newNotes);

    }

    // Edit a note
    const editNote= async (id, title, description, tag)=> {
      const response = await fetch(`${host}/user/note/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": localStorage.getItem('token'),
        },
        body: JSON.stringify({title, description, tag})
      });

      const json = await response.json(); 
      console.log(title);

      let newNotes = JSON.parse(JSON.stringify(notes))
     // Logic to edit in client
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

    }


    return (
    <noteContext.Provider value={{notes, addnewNote, deleteNote, editNote, getNotes}}>
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