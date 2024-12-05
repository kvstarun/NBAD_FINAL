const mongoose = require('mongoose');

const DatasetSchema = new mongoose.Schema({
  label: String,
  data: [Number],
  borderColor: String,
  backgroundColor: String,
  stackId: String,  // New field for stacked bar charts
});

const ChartDataSchema = new mongoose.Schema({
  title: String,
  labels: [String],
  datasets: [DatasetSchema],
});

module.exports = mongoose.model('ChartData', ChartDataSchema);
