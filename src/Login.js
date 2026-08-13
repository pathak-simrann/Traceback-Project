import { useState } from "react";
import axios from "axios";
import "./Login.css";
import "./App.css";

function Login() {
 
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/login",
        {
          email,
          password
        }
      );

      alert(res.data.message);

    } catch (error) {
      console.log(error);
      alert(error.message);
    }
    
  };

  return (
    <div className="login-page">

      <div className="top-shape"></div>
      <div className="bottom-shape"></div>

      <div className="login-card">

        <h1>Welcome Back</h1>

        <p className="subtitle">
          Please sign in to your account
        </p>

        <div className="form-group">
          <label>Email</label>

          <div className="input-box">
            <span>✉</span>

            <input
              type="email"
              placeholder="Enter your email"
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

        <div className="forgot-password">
          Forgot Password?
        </div>

        <button
          className="signin-btn"
          onClick={handleLogin}
        >
          Sign In
        </button>

        <div className="divider">
          <hr />
          <pre>                                                   or</pre>
        </div>

        <button className="google-btn">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
            alt=""
          />
          Sign in with Google
        </button>

        <p className="signup-text">
          Don't have an account?
          <span> Sign up</span>
        </p>

      </div>
    </div>
  );
}

export default Login;