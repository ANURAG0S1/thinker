const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  lastLogin: { default: Date.now(), type: Date },
  logins: { type: Number, default: 0 },
  incorrectLogins: { type: Number, default: 5 },
});

var user = mongoose.model('user', userSchema);

module.exports = user;
