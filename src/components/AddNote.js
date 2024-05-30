
import React, {useContext, useState} from 'react'
import noteContext from '../context/notes/noteContext'

const AddNote = () => {
    const context = useContext(noteContext);
    const {notes, addnewNote}= context;

    const [note, setNote ] = useState({title: "", description: "", tag: ""})

    const handleClick = ()=>{
      addnewNote(note.title, note.description, "kkl");
    }

    const onChange= (e)=>{
      setNote({...note, [e.target.name]: e.target.value})
    }

  return (
    <>
    <div className='container '>
      
     <div className='col'>
     <div className="card">
  <div className="card-body">
  <div className="input-group mb-3">
  <span className="input-group-text">t:</span>
  <div className="form-floating">
    <input type="text" className="form-control" id="title" name='title' placeholder="title" onChange={onChange} />
    <label htmlFor="title">title</label>
  </div>
</div>
<div className="input-group mb-3">
  <span className="input-group-text">d:</span>
  <div className="form-floating">
    <input type="text" className="form-control" id="description" name='description' placeholder="Description" style={{height: '180px'}} onChange={onChange}/>
    <label htmlFor="description">Description</label>
  </div>
</div>
    <i className="fa-sharp fa-solid fa-pen mx-2" onClick={handleClick}></i>
    <i className="fa-sharp fa-solid fa-trash mx-2"></i>
    
    
  </div>
</div>
</div>

</div>
    </>
  )
}

export default AddNote