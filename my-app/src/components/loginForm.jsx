// import { Button } from "../../components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
import React, { useState, useContext } from "react";
// import { ToastContainer, toast, Bounce } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../context/data-provider";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const history = useNavigate();
  const [password, setPassword] = useState("");
  const { setAccount } = useContext(DataContext);

  // const router = useRouter();
  function onEmailChange(e) {
    setEmail(e.target.value);
  }

  function onPasswordChange(e) {
    setPassword(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: email,
          password: password,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        localStorage.setItem("account", data.data.name);
        setAccount(data.data.name);
        history("/");
      }
    } catch (error) {
      console.log("Error:", error);
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
            Login
          </h2>
          <div style={{ marginBottom: "20px" }}>
            <input
              type="text"
              placeholder="Username"
              style={{
                padding: "10px",
                marginBottom: "5px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                marginTop: "0px",
              }}
              onChange={onEmailChange}
              value={email}
            />
            <input
              type="password"
              placeholder="Password"
              style={{
                padding: "10px",
                marginBottom: "5px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                marginTop: "10px",
              }}
              onChange={onPasswordChange}
              value={password}
            />
            <button
              type="submit"
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
            >
              Submit
            </button>
            <div
              style={{
                textAlign: "center",
                marginTop: "10px",
                color: "black",
                fontFamily: "sans-serif",
              }}
            >
              Donot have an account?{" "}
              <a
                href="/signup"
                style={{ color: "#007bff", textDecoration: "none" }}
              >
                Signup
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
