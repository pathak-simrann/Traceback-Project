import "./Report.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function ReportFoundItem() {

  const navigate = useNavigate();

  const [itemName, setItemName] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [dateFound, setDateFound] = useState("");
  const [description, setDescription] = useState("");
  const [finderName, setFinderName] = useState("");
  const [contact, setContact] = useState("");

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/found-item",
        {
          itemName,
          category,
          location,
          dateFound,
          description,
          finderName,
          contact
        }
      );

      alert(res.data.message);
      navigate("/");
    } catch (error) {
      console.log(error);
      alert("Server Error");
    }
  };

  return (
    <div className="report-page">
     
      <div className="report-card">
        <h1>Report Found Item</h1>

        <p className="subtitle">
          Fill in the details of the found item
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
          <label>Location Found</label>
          <input
            type="text"
            placeholder="Where did you find it?"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Date Found</label>
          <input
            type="date"
            value={dateFound}
            onChange={(e) => setDateFound(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            rows="4"
            placeholder="Describe the item"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="form-group">
          <label>Finder Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={finderName}
            onChange={(e) => setFinderName(e.target.value)}
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

export default ReportFoundItem;