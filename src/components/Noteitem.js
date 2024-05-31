import React, { useContext } from 'react';
import noteContext from '../context/notes/noteContext';
import { useNavigate } from 'react-router-dom';

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const {deleteNote}= context;
  const {note}= props;
  let navigator= useNavigate();

  const editb = ()=>{
    console.log(note._id)
    navigator('/editnote', {state: {id: note._id, it: note.title, i_d: note.description, ita: note.tag }})
  }

  return (
    <>
    <div className='col-md-4' key={note._id}>
     <div className="card my-2">
  <div className="card-body">
    <h5 className="card-title"> {note.title} </h5>
    <p className="card-text"> {note.description} </p>
    
    <i className="fa-sharp fa-solid fa-pen mx-2" onClick={editb}></i>
    <i className="fa-sharp fa-solid fa-trash mx-2" onClick = {()=> {deleteNote(note._id)}}></i>
    {/* <a href="/" className="btn btn-primary">Button</a> */}
    
  </div>
</div>
</div>
      </>
  )
}

export default Noteitem;