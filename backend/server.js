const youtube = require("./data/youtube");
const uber = require("./data/uber");

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("this is a test");
});

app.post("/generate", (req, res) => {
  res.json({
    result: "HELLO FROM NEW SERVER",
  });
});
app.listen(5000, () => {
  console.log("Server running on port 5000");
}); 