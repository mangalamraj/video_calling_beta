import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();
  function onNameChange(e) {
    setName(e.target.value);
  }

  function onUsernameChange(e) {
    setUsername(e.target.value);
  }

  function onPasswordChange(e) {
    setPassword(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          username: username,
          password: password,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        history("/login");
        // router.push("/login");
      }
    } catch (e) {
      console.log("Error", e);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          width: "300px",
          padding: "20px",
          backgroundColor: "#f0f0f0",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <form
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={handleSubmit}
        >
          <h2
            style={{
              marginBottom: "20px",
              textAlign: "center",
              color: "black",
              fontFamily: "sans-serif",
            }}
          >
            Sign Up
          </h2>
          <div style={{ marginBottom: "20px" }}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={onNameChange}
              style={{
                padding: "10px",
                marginBottom: "5px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                marginTop: "10px",
              }}
            />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={onUsernameChange}
              style={{
                padding: "10px",
                marginBottom: "5px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                marginTop: "10px",
              }}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={onPasswordChange}
              style={{
                padding: "10px",
                marginBottom: "5px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                marginTop: "10px",
              }}
            />
            <button
              style={{
                padding: "10px",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                marginTop: "10px",
                width: "100%",
              }}
              type="submit"
            >
              Sign Up
            </button>
            <div
              style={{
                textAlign: "center",
                marginTop: "10px",
                color: "black",
                fontFamily: "sans-serif",
              }}
            >
              Already have an account?{" "}
              <a
                href="/login"
                style={{ color: "#007bff", textDecoration: "none" }}
              >
                Login
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
