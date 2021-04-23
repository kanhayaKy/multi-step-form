const mongoose = require("mongoose");

const userSchema = {
  first_name: {
    type: String,
    required: true,
    trim: true,
  },
  last_name: {
    type: String,
    required: true,
    trim: true,
  },
  user_email: {
    type: String,
    required: true,
    trim: true,
    validate(value) {
      if (!value.match(/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/)) {
        throw new Error("Email is not valid.");
      }
    },
  },
  user_password: {
    type: String,
    required: true,
    trim: true,
    minlength: 6,
  },
  country: {
    type: String,
    required: true,
    trim: true,
  },
  state: {
    type: String,
    trim: true,
  },
  city: {
    type: String,
    trim: true,
  },
  time: { type: Date, default: Date.now },
};

const User = mongoose.model("User", userSchema);

module.exports = User;
