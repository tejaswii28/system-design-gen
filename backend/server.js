const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend running");
});

app.post("/generate", (req, res) => {
  const { system } = req.body;

  res.json({
    result: `System Design for ${system}`
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});