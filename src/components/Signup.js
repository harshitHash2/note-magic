
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [credentials, setCredentials] = useState({name: "", email: "", password: ""});
  let history = useNavigate();

  const handleSubmit= async (e)=>{
    e.preventDefault();
    const response = await fetch("http://localhost:5000/auth/signup", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name: credentials.name, email: credentials.email, password: credentials.password})
    });
    const json = await response.json()
    console.log(json);
    
        // Save the auth token and redirect
        localStorage.setItem('token', json.authtoken); 
        history("/about");

    
}

const onChange = (e)=>{
  setCredentials({...credentials, [e.target.name]: e.target.value})
}


  return (
    <>
    <div className='container'>
    <form onSubmit={handleSubmit}>
    <div className="form-group">
    <label htmlFor="name">Name</label>
    <input type="text" className="form-control" id='name' name='name' value={credentials.name} aria-describedby="emailHelp" onChange={onChange} placeholder="Name" />
    
  </div>
  <div className="form-group">
    <label htmlFor="email">Email address</label>
    <input type="email" className="form-control" id='email' name='email' value={credentials.email} aria-describedby="emailHelp" onChange={onChange} placeholder="E-mail" />
    
  </div>
  <div className="form-group my-3">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="password" name='password' value={credentials.password} onChange={onChange} placeholder="Password" />
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
    </>
  )
}

export default Signup