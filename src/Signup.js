import React, { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Signup() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    rpassword: "",
  });

  let name, value;

  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  const { email, password, rpassword } = user;

  const postData = async (e) => {
    e.preventDefault();

    if (password === rpassword) {
      const response = await fetch(
        "https://react-login-9da19-default-rtdb.firebaseio.com/reactLogin.json",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );
      if (response) {
        setUser({ email: "", password: "" });
        alert("Data saved successfully");
      }
    } else {
      alert("Both Password not Match");
    }
  };

  return (
    <>
      <div className="login-form">
        <div className="text">Signup</div>
        <form method="POST">
          <div className="field">
            <div className="fas fa-envelope"></div>
            <input
              required
              type="text"
              name="email"
              value={user.email}
              onChange={getUserData}
              placeholder="Email or Phone"
            />
          </div>
          <div className="field">
            <div className="fas fa-lock"></div>
            <input
              required
              type="password"
              name="password"
              value={user.password}
              onChange={getUserData}
              placeholder="Password"
            />
          </div>
          <div className="field">
            <div className="fas fa-lock"></div>
            <input
              required
              type="password"
              name="rpassword"
              value={user.rpassword}
              onChange={getUserData}
              placeholder="Re-enter Password"
            />
          </div>
          <button onClick={postData}>Create Account</button>
          <div className="link">
            Already you are our member?
            <br />
            <Link to="/login">Login now</Link>
          </div>
        </form>
      </div>
    </>
  );
}
export default Signup;
