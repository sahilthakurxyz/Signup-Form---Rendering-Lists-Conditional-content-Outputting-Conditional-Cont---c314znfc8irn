import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [gender, setGender] = useState("male");
  let [phonenumber, setPhonenumber] = useState(Number);

  let [error, setError] = useState("");
  const isAphamumeric = (name) => {
    return /^[a-zA-Z0-9]+(?:\s[a-zA-Z0-9]+)*$/.test(name);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (!name && !email && !phonenumber && !password && !gender) {
      setError("All field are mandatory");
      return;
    }
    if (!isAphamumeric(name) && name.trim().length === 0) {
      setError("Name is not alphanumeric");
      return;
    }
    if (!email.includes("@")) {
      setError("Email must contained @");
    }
    if (!gender) {
      setError("Please identify as male, female or others");
      return;
    }
    if (isNaN(phonenumber)) {
      setError("Phone number must contain only numbers");
      return;
    }
    if (password.length < 6) {
      setError("Password must be atleat 6 letters");
      return;
    }
    const username = email.split("@")[0];
    setError("");
    alert(`Hello ${username}`);
  };
  return (
    <div id="main">
      <fieldset>
        <legend className="legend">Form validation* </legend>
        {error && <div className="error">{error}</div>}
        <form onSubmit={onSubmit}>
          <label htmlFor="name">Name :</label>
          <input
            type="text"
            data-testid="name"
            id="name"
            value={name}
            onChange={(e) => {
              setError("");
              setName(e.target.value);
            }}
          />
          <br />

          <label htmlFor="email">Email :</label>
          <input
            type="text"
            data-testid="email"
            id="email"
            value={email}
            onChange={(e) => {
              setError("");
              setEmail(e.target.value);
            }}
          />
          <br />

          <label htmlFor="gender">Gender :</label>
          <select
            id="gender"
            data-testid="gender"
            value={gender}
            onChange={(e) => {
              setGender(e.target.value);
            }}
          >
            <option value="male">Male</option>
            <option value="female">Fe-male</option>
            <option value="others">Others</option>
          </select>
          <br />
          <label htmlFor="phonenumber">Phone Number</label>
          <input
            type="text"
            id="phonenumber"
            data-testid="phonenumber"
            value={phonenumber}
            onChange={(e) => {
              setError("");
              setPhonenumber(e.target.value);
            }}
          />
          <br />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            data-testid="password"
            value={password}
            onChange={(e) => {
              setError("");
              setPassword(e.target.value);
            }}
          />
          <br />
          <button type="submit" data-testid="submit">
            Submit
          </button>
        </form>
      </fieldset>
    </div>
  );
};

export default App;
