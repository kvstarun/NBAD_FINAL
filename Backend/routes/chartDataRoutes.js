const express = require('express');
const router = express.Router();
const ChartData = require('../models/ChartData');

// Route for static chart data (e.g., fixed historical data)
router.get('/static-chart-data', async (req, res) => {
  console.log('Static chart data request received');
  try {
    const staticData = await ChartData.find({ title: "Static Historical Data" });
    res.json(staticData);
  } catch (error) {
    console.error('Failed to retrieve static chart data:', error);
    res.status(500).send('Server error');
  }
});

// Route for dynamic chart data (e.g., potentially changeable or updatable data)
router.get('/dynamic-chart-data', async (req, res) => {
  console.log('Dynamic chart data request received');
  try {
    const dynamicData = await ChartData.find({ title: "Dynamic Future Projections" });
    res.json(dynamicData);
  } catch (error) {
    console.error('Failed to retrieve dynamic chart data:', error);
    res.status(500).send('Server error');
  }
});

module.exports = router;
