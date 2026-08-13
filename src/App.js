import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Report from "./Report";
import Howitworks from "./Howitworks";
import Browse from "./Browse";
import Ai from "./Ai";
import ReportF from "./ReportFounditem";
import Navbar from "./Navbar";
import Contact from "./Contact";
import View from  "./Viewdetails";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="app">
   
      <section className="hero">
        <div className="hero-left">
          <div className="badge">
            🏛 CAMPUS LOST AND FOUND
          </div>

          <h1>
            Lost something?
            <br />
            <span>Let's traceback.</span>
          </h1>

          <p>
            Traceback helps students and staff find lost items
            or return what they've found on campus.
          </p>

          <div className="hero-buttons">
            <button className="browse-btn"  onClick={() => navigate("/Browse")}>
              🔍 Browse Found Items
            </button>
         
            <button className="report-btn"  onClick={() => navigate("/report")}>
              ✈ Report Lost Item
            </button>
           
          </div>
        </div>

        <div className="hero-right">
          <img
            src="https://images.unsplash.com/photo-1622560480654-d96214fdc887?auto=format&fit=crop&w=1200&q=80"
            alt="lost items"
          />
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <div className="icon-circle">🔍</div>

          <div>
            <h3>Find Lost Items</h3>
            <p>
              Browse found items reported by our
              campus community.
            </p>
          </div>
        </div>

        <div className="divider"></div>

        <div className="feature">
          <div className="icon-circle green">✈</div>

          <div>
            <h3>Report Lost Items</h3>
            <p>
              Quickly report what you've lost
              to help others find it.
            </p>
          </div>
        </div>

        <div className="divider"></div>

        <div className="feature">
          <div className="icon-circle purple">♡</div>

          <div>
            <h3>Return & Reunite</h3>
            <p>
              We make it easy to return items
              to their rightful owners.
            </p>
          </div>
        </div>
      </section>
      <section className="how-section">
  <h2>How Traceback Works</h2>

  <div className="steps">

    <div className="step-card">
      <h3>1️⃣ Report</h3>
      <p>
        Report your lost item or submit details of a found item.
      </p>
    </div>

    <div className="step-card">
      <h3>2️⃣ Browse</h3>
      <p>
        Students can browse all found items uploaded on the platform.
      </p>
    </div>

    <div className="step-card">
      <h3>3️⃣ Contact</h3>
      <p>
        If you find your item, contact the finder using the provided details.
      </p>
    </div>

  </div>
</section>


<section className="why-section">

<h2>Why Choose Traceback?</h2>

<div className="why-grid">

<div className="why-card">
<h3>⚡ Fast Reporting</h3>
<p>Report lost and found items within seconds.</p>
</div>

<div className="why-card">
<h3>🔒 Secure Platform</h3>
<p>Designed specially for campus students and staff.</p>
</div>

<div className="why-card">
<h3>🤖 AI Assistance</h3>
<p>AI chatbot helps users navigate the platform easily.</p>
</div>

<div className="why-card">
<h3>📱 Easy To Use</h3>
<p>Simple interface for quick reporting and browsing.</p>
</div>

</div>

</section>

<section className="stats">

<div className="stat">
<h2>150+</h2>
<p>Items Reported</p>
</div>

<div className="stat">
<h2>95+</h2>
<p>Items Returned</p>
</div>

<div className="stat">
<h2>500+</h2>
<p>Students Registered</p>
</div>

<div className="stat">
<h2>24/7</h2>
<p>Available</p>
</div>

</section>

<section className="testimonial">

<h2>What Students Say</h2>

<div className="testimonial-card">

<p>
"I found my ID card within a day using Traceback.
The process was simple and quick."
</p>

<h4>- Rahul Sharma</h4>

</div>

<div className="testimonial-card">

<p>
"Someone reported my calculator and I got it back
through the contact details provided."
</p>

<h4>- Priya Patil</h4>

</div>

</section>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/report" element={<Report />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/ai" element={<Ai/>} />
        <Route path="/contact" element={<Contact/>} />
         <Route path="/reportf" element={<ReportF/>} />
         <Route
path="/details/:id"
element={<View/>}
/>

        
         <Route path="/howitworks" element={<Howitworks/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;