import "./Howitworks.css";

function HowItWorks() { 
  return (
   
    <div className="how-page">
     
      <div className="how-card">
        <h1>How Traceback Works</h1>

        <p className="subtitle">
          Finding and returning lost items made simple
        </p>

        <div className="step">
          <div className="step-number">1</div>
          <div>
            <h3>Report a Lost Item</h3>
            <p>
              Submit details about the item you lost,
              including location and description.
            </p>
          </div>
        </div>

        <div className="step">
          <div className="step-number">2</div>
          <div>
            <h3>Browse Found Items</h3>
            <p>
              Check items reported by students and staff
              across the campus.
            </p>
          </div>
        </div>

        <div className="step">
          <div className="step-number">3</div>
          <div>
            <h3>Match & Verify</h3>
            <p>
              Compare item details and verify ownership.
            </p>
          </div>
        </div>

        <div className="step">
          <div className="step-number">4</div>
          <div>
            <h3>Get Reunited</h3>
            <p>
              Collect your item and reconnect with what
              you lost.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;