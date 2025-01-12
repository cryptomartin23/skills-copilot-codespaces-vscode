// Create web server
// Listen to port 3000
// Respond to GET /comments with list of comments
// Respond to POST /comments with new comment
// Respond to GET /comments/:id with specific comment
// Respond to PUT /comments/:id with update comment
// Respond to DELETE /comments/:id with delete comment

// Require the express module
const express = require('express');
const bodyParser = require('body-parser');

// Create a new express application
const app = express();

// Parse JSON data in the body of the request
app.use(bodyParser.json());

// Create a list of comments
const comments = [
  { id: 1, username: 'alice', comment: 'I love your blog!' },
  { id: 2, username: 'bob', comment: 'This is the best blog ever!' },
  { id: 3, username: 'charlie', comment: 'This is the worst blog ever!' }
];

// Respond to GET /comments with list of comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Respond to POST /comments with new comment
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.status(201).json(comment);
});

// Respond to GET /comments/:id with specific comment
app.get('/comments/:id', (req, res) => {
  const id = Number(req.params.id);
  const comment = comments.find(c => c.id === id);
  if (comment) {
    res.json(comment);
  } else {
    res.status(404).json({ error: 'Comment not found' });
  }
});

// Respond to PUT /comments/:id with update comment
app.put('/comments/:id', (req, res) => {
  const id = Number(req.params.id);
  const comment = comments.find(c => c.id === id);
  if (comment) {
    comment.username = req.body.username;
    comment.comment = req.body.comment;
    res.json(comment);
  } else {
    res.status(404).json({ error: 'Comment not found' });
  }
});

// Respond to DELETE /comments/:id with delete comment
app.delete('/comments/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = comments.findIndex(c => c.id === id);
  if (