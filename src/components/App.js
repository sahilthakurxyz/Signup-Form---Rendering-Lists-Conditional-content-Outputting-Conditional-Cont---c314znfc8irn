import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("male");
  const [phonenumber, setPhonenumber] = useState("");

  const [error, setError] = useState("");

  const isAlphanumeric = (name) => {
    return /^[a-zA-Z0-9\s]+$/.test(name);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (!name || !email || !phonenumber || !password || !gender) {
      setError("All fields are mandatory");
      return;
    }

    if (!isAlphanumeric(name.trim())) {
      setError("Name is not alphanumeric");
      return;
    }

    if (!email.includes("@")) {
      setError("Email must contain @");
      return;
    }

    if (isNaN(phonenumber)) {
      setError("Phone number must contain only numbers");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    const username = email.split("@")[0];
    setError("");
    alert(`Hello ${username}`);
  };
  return (
    <div id="main">
      {error && <div className="error">{error}</div>}
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name:</label>
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

        <label htmlFor="email">Email:</label>
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

        <label htmlFor="gender">Gender:</label>
        <select
          id="gender"
          data-testid="gender"
          value={gender}
          onChange={(e) => {
            setError("");
            setGender(e.target.value);
          }}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="others">Others</option>
        </select>
        <br />

        <label htmlFor="phonenumber">Phone Number:</label>
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

        <label htmlFor="password">Password:</label>
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
    </div>
  );
};

export default App;
