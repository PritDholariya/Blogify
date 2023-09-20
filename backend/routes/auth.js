const express = require('express');
const User = require('../models/user'); // Import your User model here

const router = express.Router();

// Register route
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const userdoc = await User.create({
      username,
      email,
      password
    });
    console.log(userdoc);
    res.json(userdoc);
  } catch (e) {
    console.log(e);
    res.status(422).json({ error: "Failed to create user", details: e.message });
  }
});

module.exports = router;
