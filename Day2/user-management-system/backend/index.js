const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

// app.use(cors());
app.use(express.json()); // Ensure JSON parsing
app.use(cors({ origin: 'http://localhost:5173' })); // Adjust port if needed


// Sample user data
let users = [
  { id: 1, name: 'Harsh' },
  { id: 2, name: 'Kumar' }
];

// GET /users - Fetch users
app.get('/users', (req, res) => {
  res.json(users);
});

// POST /users - Add new user
app.post('/users', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }
  const newUser = { id: users.length + 1, name };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
