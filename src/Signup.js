import { useState } from "react";
import axios from "axios";
import "./Signup.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [college, setCollege] = useState("");

  const handleSignup = async () => {
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === "" ||
      college === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/signup",
        {
          name,
          email,
          password,
          college
        }
      );

      alert(res.data.message);

      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setCollege("");
    } catch (error) {
      console.log(error);
      alert("Signup failed");
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-card">

        <h1>Create your account</h1>

        <p className="subtitle">
          Join us today and get started
        </p>

        <div className="form-group">
          <label>Full Name</label>

          <div className="input-box">
            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group">
          <label>Email Address</label>

          <div className="input-box">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group">
          <label>Password</label>

          <div className="input-box">
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group">
          <label>Confirm Password</label>

          <div className="input-box">
            <input
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group">
          <label>College Name</label>

          <div className="input-box">
            <input
              type="text"
              placeholder="Enter your college name"
              value={college}
              onChange={(e) => setCollege(e.target.value)}
            />
          </div>
        </div>

        <div className="checkbox-row">
          <input type="checkbox" />
          <p>
            I agree to the
            <span> Terms of Service </span>
            and
            <span> Privacy Policy</span>
          </p>
        </div>

        <button
          className="signup-btn"
          onClick={handleSignup}
        >
          Sign Up
        </button>

      </div>
    </div>
  );
}

export default Signup;