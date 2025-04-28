const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// GET route - homepage check
app.get('/', (req, res) => {
  res.send('Ask Kai server is running!');
});

// POST route - handle user prompts
app.post('/', (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ reply: "No prompt received." });
  }

  const mockReply = `You asked: "${prompt}" — I'm on it, mate!`;

  res.json({ reply: mockReply });
});

// Dynamic port binding for Railway
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ask Kai server running on port ${PORT}`);
});
