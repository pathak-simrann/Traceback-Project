import { useNavigate } from "react-router-dom";
import "./App.css";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-icon">⌕</span>
        traceback
      </div>

      <ul className="nav-links">
        <button className="home" onClick={() => navigate("/")}>
          <li>Home</li>
        </button>

        <button className="report" onClick={() => navigate("/report")}>
          <li>Report Lost Item</li>
        </button>

        <button className="ReportF" onClick={() => navigate("/reportf")}>
          <li>Report Found Item</li>
        </button>

        <button className="browse" onClick={() => navigate("/browse")}>
          <li>Browse Found Items</li>
        </button>

        <button
          className="howitworks"
          onClick={() => navigate("/howitworks")}
        >
          <li>How It Works</li>
        </button>

        <button className="contact" onClick={() => navigate("/contact")}>
          <li>Contact</li>
        </button>

        <button className="contact" onClick={() => navigate("/ai")}>
          <li>AI Chatbot</li>
        </button>
      </ul>

      <div className="nav-buttons">
        <button
          className="login-btn"
          onClick={() => navigate("/login")}
        >
          Log In
        </button>

        <button
          className="signup-btn"
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </button>
      </div>
    </nav>
  );
}

export default Navbar;