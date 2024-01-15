// Create web server
const express = require("express");
const app = express();
const port = 3000;

// Create a route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Listen on port 3000
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// Path: comments.js
// Create a route
app.get("/comments", (req, res) => {
  res.json(comments);
});

// Path: comments.js
// Create a route
app.get("/comments/:id", (req, res) => {
  const comment = comments.find((comment) => comment.id === req.params.id);
  res.json(comment);
});

// Path: comments.js
// Create a route
app.post("/comments", (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.json(comment);
});

// Path: comments.js
// Create a route
app.put("/comments/:id", (req, res) => {
  const comment = comments.find((comment) => comment.id === req.params.id);
  const index = comments.indexOf(comment);
  comments[index] = req.body;
  res.json(req.body);
});

// Path: comments.js
// Create a route
app.delete("/comments/:id", (req, res) => {
  const comment = comments.find((comment) => comment.id === req.params.id);
  const index = comments.indexOf(comment);
  comments.splice(index, 1);
  res.json({ message: `Comment ${req.params.id} deleted.` });
});

// Path: comments.js
// Create a route
app.delete("/comments", (req, res) => {
  comments = [];
  res.json({ message: "All comments deleted." });
});

// Path: comments.js
// Create a route
app.patch("/comments/:id", (req, res) => {
  const comment = comments.find((comment) => comment.id === req.params.id);
  const index = comments.indexOf(comment);
  const keys = Object.keys(req.body);
  keys.forEach((key) => {
    comments[index][key] = req.body[key];
  });
  res.json(comments[index]);
});

// Path: comments.js
// Create a route
app.patch("/comments/:id", (req, res) => {
  const comment = comments.find((comment) => comment.id === req.params.id);
});