import "./Browse.css";
import { useEffect, useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

function BrowseFoundItems() {
const navigate = useNavigate();
  const [items, setItems] = useState([]);

  useEffect(() => {

    axios
      .get("http://localhost:5000/found-items")
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

  }, []);

  return (
    <div className="browse-page">


      <h1>Browse Found Items</h1>

      <p className="browse-subtitle">
        Find items reported by students and staff
      </p>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search found items..."
        />
      </div>

      <div className="items-grid">

        {items.map((item) => (

          <div className="item-card" key={item.id}>

            <img
              src="https://via.placeholder.com/300"
              alt={item.item_name}
            />

            <div className="item-info">

              <h3>{item.item_name}</h3>

              <p>
                <strong>Category:</strong> {item.category}
              </p>

              <p>
                <strong>Location:</strong> {item.location}
              </p>

              <p>
                <strong>Date:</strong> {item.date_found}
              </p>

              <button className="details-btn" onClick={() => navigate(`/details/${item.id}`)}>
                View Details
              </button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default BrowseFoundItems;