
import { useNavigate } from "react-router-dom";
import "./Report.css";
import { useState } from "react";
import axios from "axios";


function ReportLostItem() {
  
  const [itemName, setItemName] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [dateLost, setDateLost] = useState("");
  const [description, setDescription] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [contact, setContact] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    
  try {
    const res = await axios.post(
      "http://localhost:5000/lost-item",
      {
        itemName,
        category,
        location,
        dateLost,
        description,
        ownerName,
        contact
      }
    );

    alert(res.data.message);
    navigate("/");
  } catch (error) {
    console.log(error);
    alert("Server Error");
  }

    // We will connect this to MySQL next
  };

  return (
    <div className="report-page">
   
      <div className="report-card">
        <h1>Report Lost Item</h1>

        <p className="subtitle">
          Fill in the details of your lost item
        </p>

        <div className="form-group">
          <label>Item Name</label>
          <input
            type="text"
            placeholder="Enter item name"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option>Electronics</option>
            <option>Books</option>
            <option>ID Card</option>
            <option>Wallet</option>
            <option>Keys</option>
            <option>Other</option>
          </select>
        </div>

        <div className="form-group">
          <label>Location Lost</label>
          <input
            type="text"
            placeholder="Where did you lose it?"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Date Lost</label>
          <input
            type="date"
            value={dateLost}
            onChange={(e) => setDateLost(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            rows="4"
            placeholder="Describe your item"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="form-group">
          <label>Owner Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Contact Number</label>
          <input
            type="text"
            placeholder="Enter your contact number"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>

        <button
          className="submit-btn"
          onClick={handleSubmit}
        >
          Submit Report
        </button>
      </div>
    </div>
  );
}

export default ReportLostItem;