import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';


export default function Login() {

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  let name,value;
  const getUserData = (event) =>{
    name = event.target.name;
    value = event.target.value;

    setUser({...user,[name]:value});
  };

  const {email,password} = user
  const checkLogin = async (e) => {
    e.preventDefault();
    
    const response = await fetch("https://react-login-9da19-default-rtdb.firebaseio.com/reactLogin.json");
    const dataFromFirebase = await response.json();
  
    const users = Object.values(dataFromFirebase);
  
    const foundUser = users.find((user) => user.email === email && user.password === password);
  
    if (foundUser) {
      setUser({ email: "", password: "" });
      alert("Login successful");
    } else {
      alert("Invalid email or password");
    }
  };
  

  return (
    <>
      <div className="login-form">
        <div className="text">LOGIN</div>
        <form>
          <div className="field">
            <div className="fas fa-envelope"></div>
            <input type="text" name="email" value={user.email} onChange={getUserData} placeholder="Email or Phone" />
          </div>
          <div className="field">
            <div className="fas fa-lock"></div>
            <input type="password" name="password" value={user.password} onChange={getUserData} placeholder="Password" />
          </div>
          <button onClick={checkLogin}>LOGIN</button>
          <div className="link">
            Not a member?
            <Link to="/signup">Signup now</Link>
          </div>
        </form>
      </div>
    </>
  );
}