const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  },
  code: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  credits: {
    type: Number,
    required: true
  }
});

const timetable = mongoose.model('Timetable', timetableSchema);

module.exports = timetable;