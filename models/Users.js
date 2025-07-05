// models/User.js
const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  age: {
    type: Number,
    min: 0,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: true,
  },
  contact: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});


module.exports = mongoose.model('User', userSchema);
