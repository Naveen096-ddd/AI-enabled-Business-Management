import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signupUser } from "../../app/AuthSlice";
import "./signup.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const SignupPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !mobileNumber || !role) {
      alert("Please fill all fields!");
      return;
    }
    dispatch(
      signupUser({
        name,
        email,
        password,
        mobileNumber,
        role,
      })
    ).then(() => {
      navigate("/login");
    });
  };
  return (
    <>
      <Header />
      <div className="signup-container">
        <form className="signup-card" onSubmit={handleSubmit}>
          <h2 className="signup-title">Signup</h2>
          <label>Full Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label>Mobile Number</label>
          <input type="text" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <label>Role</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="">Select Role</option>
            <option value="Employee">Employee</option>
            <option value="Hr">Hr</option>
            <option value="Manager">Manager</option>
          </select>
          <p className="login-text">
            Already have an account? <Link to="/login">Login</Link>
          </p>
          <button type="submit">Signup</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default SignupPage;
