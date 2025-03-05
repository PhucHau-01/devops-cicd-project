require("dotenv").config();
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(require("cors")());

// Sample API Endpoint
app.get("/", (req, res) => {
  res.json({ message: "Backend is running!" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
