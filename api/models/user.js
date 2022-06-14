const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true, minLength: 3, maxLength: 30 },
  lastName: { type: String, required: true, minLength: 3, maxLength: 30 },
  email: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 200,
    unique: true,
  },
  password: { type: String, required: true, minLength: 5, maxLength: 1024},
  avatar: { type: String, default: "" },
  isAdmin: { type: Boolean, default: false}
});

module.exports = mongoose.model('User', userSchema);