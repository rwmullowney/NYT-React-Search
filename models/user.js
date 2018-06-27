const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Insert user schema for Mongoose here
const userSchema = new Schema({
  // title: { type: String, required: true },
  // author: { type: String, required: true },
  // synopsis: String,
  // date: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
