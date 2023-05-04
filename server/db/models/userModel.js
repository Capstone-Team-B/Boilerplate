const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: Number,
  password: String,
  firstName: String,
  lastName: String,
  email: String,
  phoneNumber: String,
  createdAt: Date,
  updatedAt: Date
});

const User = mongoose.model('User', userSchema);

module.exports = User;