const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const auth = require('../middleware/auth');
const ChartData = require('../models/ChartData');

const router = express.Router();

// Helper function to handle token generation
const generateToken = (userId) => {
  const payload = { user: { id: userId } };
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
};

// Login Route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  
  try {
    const user = await User.findOne({ username, password });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const token = generateToken(user.id);
    res.json({ token });
  } catch (err) {
    console.error('Login error:', err.message);
    res.status(500).send('Server error');
  }
});

// Signup Route
router.post('/signup', async (req, res) => {
  const { username, password, email } = req.body;

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ msg: 'Username already exists' });
    }

    const newUser = new User({ username, password, email });
    await newUser.save();

    res.status(201).json({ msg: 'User registered successfully' });
  } catch (err) {
    console.error('Signup error:', err.message);
    res.status(500).send('Server error');
  }
});

// Protected Data Endpoint
router.get('/data', auth, (req, res) => {
  res.json({ data: 'Secure data response' });
});

router.get('/chart-data', async (req, res) => {
  const { type } = req.query;
  console.log(`Received request for chart data: type=${type}`);

  if (!type) {
    return res.status(400).json({ msg: 'Chart type must be specified' });
  }

  try {
    const chartData = await ChartData.findOne({ title: type });
    console.log('Query result:', chartData);

    if (!chartData) {
      console.log(`No chart data found for type: ${type}`);
      return res.status(404).json({ msg: 'Data not found' });
    }

    res.json(chartData);
  } catch (error) {
    console.error(`Failed to retrieve ${type} chart data:`, error);
    res.status(500).json({ msg: 'Server error', error: error.message });
  }
});


module.exports = router;
