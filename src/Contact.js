/*import "./Contact.css";
import Navbar from "./Navbar";

function Contact() {
  return (
    <>
 

      <div className="contact-page">
        <div className="contact-card">

          <h1>Contact Us</h1>

          <p className="subtitle">
            We'd love to hear from you!
          </p>

          <div className="contact-info">
            <p>📍 PCCOE, Pune</p>
            <p>📧 traceback@gmail.com</p>
            <p>📞 +91 9876543210</p>
          </div>

          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              rows="5"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button className="send-btn">
            Send Message
          </button>

        </div>
      </div>
    </>
  );
}

export default Contact;
*/
import "./Contact.css";
import { useState } from "react";
import axios from "axios";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/contact",
        {
          name,
          email,
          message
        }
      );

      alert(res.data.message);

      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.log(error);
      alert("Server Error");
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-card">

        <h1>Contact Us</h1>

        <p className="subtitle">
          We'd love to hear from you!
        </p>

        <div className="contact-info">
          <p>📍 PCCOE, Pune</p>
          <p>📧 traceback@gmail.com</p>
          <p>📞 +91 9876543210</p>
        </div>

        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea
            rows="5"
            placeholder="Write your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        <button
          className="send-btn"
          onClick={handleSubmit}
        >
          Send Message
        </button>

      </div>
    </div>
  );
}

export default Contact;