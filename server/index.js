const express = require("express");
const path = require("path");
const cors = require('cors'); 

const app = express();
const port = process.env.PORT || 3001;


app.use(express.json()) 
const data = require('./shows_in_frontend.json') 
app.use(cors());


// add middleware
app.use(express.static(path.join(__dirname, "../recipes/build")));
app.use(express.static("public"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../recipes/build/index.html"));
});


app.get("/api/shows_in_frontend", (req, res) => { 
  res.json(data) 
}); 


// start express server on port 3001
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


 