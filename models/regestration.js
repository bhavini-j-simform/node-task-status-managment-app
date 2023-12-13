// models/regestration.js
const mongoose = require('mongoose');

const regestrationSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  password: String,
});

const Regestration = mongoose.model('Regestration', regestrationSchema);

module.exports = Regestration;
