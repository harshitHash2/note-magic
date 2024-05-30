import React, { useContext } from 'react';
import noteContext from '../context/notes/noteContext';

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const {deleteNote}= context;
  const {note}= props;

  return (
    <>
    <div className='col-md-4' key={note._id}>
     <div className="card my-2">
  <div className="card-body">
    <h5 className="card-title"> {note.title} </h5>
    <p className="card-text"> {note.description} </p>
    
    <i className="fa-sharp fa-solid fa-pen mx-2"></i>
    <i className="fa-sharp fa-solid fa-trash mx-2" onClick = {()=> {deleteNote(note._id)}}></i>
    {/* <a href="/" className="btn btn-primary">Button</a> */}
    
  </div>
</div>
</div>
      </>
  )
}

export default Noteitem;