const mongoose = require("mongoose");

const toolSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 0,
    maxLength: 100,
  },

  img: {
    type: String,
    required: true,
    minLength: 0,
    maxLength: 1000,
  },
  desc: {
    type: String,
    required: true,
    minLength: 0,
    maxLength: 1000,
  },
  minOrderQuantity: {
    type: Number,
    required: true,
    minLength: 0,
    maxLength: 100000,
  },
  availableQuantity: {
    type: Number,
    required: true,
    minLength: 0,
    maxLength: 100000000000,
  },
  price: {
    type: Number,
    required: true,
    minLength: 0,
    maxLength: 10000000000000,
  },
});

module.exports = {
  Tool: mongoose.model("Tool", toolSchema),
};
