require('dotenv').config(); // Load environment variables
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const apiRoutes = require('./routes/api');
const chartDataRoutes = require('./routes/chartDataRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');

    // List collections for debugging purposes
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log('Existing collections:', collections.map(c => c.name));
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
};

// Middleware
app.use(cors());
app.use(express.json());

// Debugging: Log every incoming request
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  console.log('Request Body:', req.body);
  next();
});

// Setup API routes
app.use('/api', apiRoutes);
app.use('/api', chartDataRoutes);

// Serve static files from the React app build folder
app.use(express.static(path.join(__dirname, 'build')));

// React Frontend: Catch-all handler for React routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Enable mongoose debugging
mongoose.set('debug', true);

// Initialize MongoDB connection
console.log('Connecting to MongoDB using URI:', process.env.DB_URI);
connectToDB();

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
