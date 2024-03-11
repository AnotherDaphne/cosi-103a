const express = require("express");
const app = express(); // create express app

app.get("/", (req, res) => {
  res.send("hello world");
});

// start express server on port 5000
app.listen(3001, () => {
  console.log("server started on port 3001");
});