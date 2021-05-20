const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const users = new Schema(
  {
    name: { type: String, required: true },
    number: { type: String, required: true },
    sex: { type: String, required: true },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('users', users);