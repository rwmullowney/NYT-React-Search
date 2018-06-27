const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Insert user schema for Mongoose here
const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  userEmail: {
    type: String
  },
  wallet: {
    type: String
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
