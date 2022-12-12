import React,{useState} from 'react'

const Login = () => {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const [error,setError]=useState("");
    const[dob,setDob]=useState("");
    const [gender,setGender]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        if (email=="bharti123@gmail.com" && password=="123456"
         && dob=="10/5/1993" && gender=="female") {
          setError("Login Sucessfull!");
        } else {
          setError("Invalid User");
        }
       
    };
  return (
    <div>
        <form onSubmit={handleSubmit}>
     <h2>Sign Up Form</h2>
     <p>
     Enter Email id:-<input type="email" placeholder='Email'
      value={email} onChange={(e)=>setEmail(e.target.value)}/>
    </p>
    <p>
     Enter Password:-<input type="password" placeholder='Password'
     value={password} onChange={(e)=>setPassword(e.target.value)}/>
    </p>
    <p>
     Enter Dob:-<input type="date" placeholder='Dob'
     value={dob} onChange={(e)=>setDob(e.target.value)}/>
    </p>
    <p>
     Select Gender :-<input type="radio" name="Male"
     value={gender} onChange={(e)=>setGender(e.target.value)}/>Male
     <input type="radio" name="Female"
     value={gender} onChange={(e)=>setGender(e.target.value)}/>Female
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