const mongoose = require('mongoose');

const timetableSchema = new mongoose.Schema({
  dayOfWeek: {
    type: String,
    required: true,
    enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  },
  subject: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  }
});

const timetable = mongoose.model('Timetable', timetableSchema);

module.exports = timetable;