import React, {  useContext, useState } from 'react'
import Noteitem from './Noteitem'
// import NoteContext from "../context/notes/noteContext"
import noteContext from '../context/notes/noteContext';
import AddNote from './AddNote';

const Notes = () => {
    const context = useContext(noteContext);
    // const { notes } = useContext(noteContext);
    const {notes}= context;
    console.log(typeof notes)
  return (
    
    <>
    <div className='container my-3'>
      <div className='row'>
        {/* <React.Fragment> */}
        {notes.map((note)=> {

          // return <h1>jg</h1>

          return <Noteitem note={note}/> 
        })}

       
    {/* </React.Fragment> */}
    </div>
    </div>
    </>
    
  )
}

export default Notes