const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Connect to the MongoDB database

// Define a schema for the tools collection
const toolSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  available: {
    type: Boolean,
    required: true,
  },
});

// Define a model for the tools collection
// const Tool = mongoose.model('Tool', toolSchema);
module.exports = mongoose.model('Tool', toolSchema)
