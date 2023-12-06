import React, { useState } from "react";
import Login from "./Login";
import './App.css'

const App = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { username, email, password } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (username !== "" && email !== "" && password !== "") {
      alert("Form Submitted Successfully");
    }
  };
  return (
    <div className="main">
      <div className="sub-main">
        <center>
          <Login />
          <form autoComplete="off" onSubmit={submitHandler}>
            <h2>
              <input
                type="text"
                name="username"
                value={username}
                onChange={changeHandler}
                placeholder="Username"
                className="username"
                required
              />{" "}
              <br />
              <input
                type="email"
                name="email"
                value={email}
                onChange={changeHandler}
                placeholder="Email"
                className="email"
                required
              />{" "}
              <br />
              <input
                type="password"
                name="password"
                value={password}
                onChange={changeHandler}
                placeholder="Password"
                className="password"
                required
              />{" "}
              <br />
              <input type="submit" name="submit" className="submit" /> <br />
            </h2>
          </form>
        </center>
      </div>
    </div>
  );
};

export default App;
