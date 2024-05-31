
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({email: "", password: ""});
  let history = useNavigate();

    const handleSubmit= async (e)=>{
      
        e.preventDefault();
        const response = await fetch("http://localhost:5000/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        });
        const json = await response.json()
        console.log(json);
        if (json.success){
            // Save the auth token and redirect

            localStorage.setItem('token', json.authtoken); 
            history("/about");

        }
        else{
            alert("Invalid credentials");
        }
    }

    const onChange = (e)=>{
      setCredentials({...credentials, [e.target.name]: e.target.value})
  }
    
  return (
    <>
    <h2 className='polo my-4' style={{textAlign: 'center', color: 'white'}}> Log-In </h2>
    <div className='container ' style={{width: '35rem'}} >
    <div className="card my-4" style={{borderRadius: '40px'}}>
  <div className="card-body">
    <div className='container my-4'>

       <form onSubmit={handleSubmit}>
  <div className="form-group">
    <label htmlFor="email">Email address</label>
    <input type="email" className="form-control" id='email' name='email' value={credentials.email} aria-describedby="emailHelp" onChange={onChange} placeholder="Enter email" />
    
  </div>
  <div className="form-group my-3">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="password" name='password' value={credentials.password} onChange={onChange} placeholder="Password" />
  </div>
  
  <button type="submit" className="btn btn-primary">LogIn</button>
</form>
</div>
</div>
</div>
</div>
    </>
  )
}

export default Login