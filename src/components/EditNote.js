import React, {useContext, useState} from 'react'
import noteContext from '../context/notes/noteContext'
import { useLocation } from 'react-router-dom';


const EditNote = () => {
    const location = useLocation();
  const { id, it, i_d, ita } = location.state || {};
    const context = useContext(noteContext);
    const {notes, editNote}= context;

    const [note, setNote ] = useState({title: it, description: i_d, tag: ita})

    const handleClick = ()=>{
      console.log(id);
      editNote(id, note.title, note.description, note.tag);
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
    <input type="text" className="form-control" id="title" name='title' value={note.title} placeholder="title" onChange={onChange} />
    <label htmlFor="title">title</label>
  </div>
</div>
<div className="input-group mb-3">
  <span className="input-group-text">d:</span>
  <div className="form-floating">
    <input type="text" className="form-control" id="description" name='description' value={note.description} placeholder="Description" style={{height: '180px'}} onChange={onChange}/>
    <label htmlFor="description">Description</label>
  </div>
</div>

<div className="input-group mb-3">
  <span className="input-group-text">d:</span>
  <div className="form-floating">
    <input type="text" className="form-control" id="tag" name='tag' value={note.tag} placeholder="Tag*"  onChange={onChange}/>
    <label htmlFor="tag">Tag</label>
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

export default EditNote