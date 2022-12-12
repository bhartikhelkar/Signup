import React,{useState} from 'react'

const Login = () => {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const [error,setError]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        if (email=="bharti123@gmail.com" && password=="123456") {
          setError("Login Sucessfull!");
        } else {
          setError("Email or Password Invalid");
        }
        
    };
  return (
    <div>
        <form onSubmit={handleSubmit}>
     <p>
     <input type="email" placeholder='Email'
      value={email} onChange={(e)=>setEmail(e.target.value)}/>
    </p>
    <p>
     <input type="password" placeholder='Password'
     value={password} onChange={(e)=>setPassword(e.target.value)}/>
    </p>
    <input type="submit"/>
    </form>
    <p>
      {error}
    </p>
    </div>

  )
}

export default Login;