import "./Viewdetails.css";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ViewDetails() {

  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {

    axios
      .get(`http://localhost:5000/found-item/${id}`)
      .then((res) => {
        setItem(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

  }, [id]);

  if (!item) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  return (
    <>
     

      <div className="details-page">

        <div className="details-card">

          <h1>{item.item_name}</h1>

          <p>
            <strong>Category:</strong> {item.category}
          </p>

          <p>
            <strong>Location:</strong> {item.location}
          </p>

          <p>
            <strong>Date Found:</strong>{" "}
            {new Date(item.date_found).toLocaleDateString("en-GB")}
          </p>

          <p>
            <strong>Description:</strong>
          </p>

          <p>{item.description}</p>

          <p>
            <strong>Finder:</strong> {item.finder_name}
          </p>

          <p>
            <strong>Contact:</strong> {item.contact}
          </p>

          <button className="claim-btn">
            Claim Item
          </button>

        </div>

      </div>
    </>
  );
}

export default ViewDetails;