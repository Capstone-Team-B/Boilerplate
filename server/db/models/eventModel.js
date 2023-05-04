const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  id: Number,
  hostId: { type: Number, ref: 'User' },
  name: String,
  description: String,
  date: Date,
  location: String,
  createdAt: Date,
  updatedAt: Date
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;

