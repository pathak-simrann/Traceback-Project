const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Simran@123@",
  database: "traceback"
});

db.connect((err) => {
  if (err) {
    console.log("Database Connection Failed");
    console.log(err);
    return;
  }

  console.log("MySQL Connected Successfully");
});

app.get("/", (req, res) => {
  res.send("Traceback Backend Running 🚀");
});

// ===================== SIGNUP =====================

app.post("/signup", (req, res) => {
  const { name, email, password } = req.body;

  const sql =
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";

  db.query(sql, [name, email, password], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        message: "Error saving user"
      });
    }

    res.json({
      message: "User registered successfully"
    });
  });
});

// ===================== LOGIN =====================

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const sql =
    "SELECT * FROM users WHERE email = ? AND password = ?";

  db.query(sql, [email, password], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        success: false,
        message: "Server Error"
      });
    }

    if (result.length > 0) {
      res.json({
        success: true,
        message: "Login Successful",
        college: result[0].college
      });
    } else {
      res.json({
        success: false,
        message: "Invalid Email or Password"
      });
    }
  });
});

// ===================== REPORT LOST ITEM =====================

app.post("/lost-item", (req, res) => {
  const {
    itemName,
    category,
    location,
    dateLost,
    description,
    ownerName,
    contact
  } = req.body;

  const sql = `
    INSERT INTO lost_items
    (item_name, category, description, location, date_lost, owner_name, contact)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      itemName,
      category,
      description,
      location,
      dateLost,
      ownerName,
      contact
    ],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: false,
          message: "Error saving lost item"
        });
      }

      res.json({
        success: true,
        message: "Lost Item Reported Successfully ✅"
      });
    }
  );
});

// ===================== REPORT FOUND ITEM =====================

app.post("/found-item", (req, res) => {
  const {
    itemName,
    category,
    location,
    dateFound,
    description,
    finderName,
    contact
  } = req.body;

  const sql = `
    INSERT INTO found_items
    (item_name, category, description, location, date_found, finder_name, contact)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      itemName,
      category,
      description,
      location,
      dateFound,
      finderName,
      contact
    ],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: false,
          message: "Error saving found item"
        });
      }

      res.json({
        success: true,
        message: "Found Item Reported Successfully ✅"
      });
    }
  );
});

// ===================== SERVER =====================
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  const sql = `
    INSERT INTO contact_messages (name, email, message)
    VALUES (?, ?, ?)
  `;

  db.query(sql, [name, email, message], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        success: false,
        message: "Error sending message"
      });
    }

    res.json({
      success: true,
      message: "Message sent successfully ✅"
    });
  });
});
app.get("/found-items", (req, res) => {

  const sql = "SELECT * FROM found_items";

  db.query(sql, (err, result) => {

    if (err) {
      console.log(err);

      return res.status(500).json({
        success: false,
        message: "Error fetching items"
      });
    }

    res.json(result);

  });

});
app.get("/found-item/:id", (req, res) => {

  const id = req.params.id;

  const sql =
    "SELECT * FROM found_items WHERE id=?";

  db.query(sql, [id], (err, result) => {

    if (err) {
      console.log(err);
      return res.status(500).json({
        message: "Server Error"
      });
    }

    res.json(result[0]);

  });

});
app.listen(5000, () => {
  console.log("Server running on port 5000");
});