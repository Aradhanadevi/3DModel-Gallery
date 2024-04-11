const mongoose = require('mongoose');

const blendSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  count: {
    type: Number,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  modle: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    required: true
  },
  downloads: {
    type: Number,
    required: true
  },
  likes: {
    type: Number,
    required: true
  }
}, { collection: 'blend' });

const Blend = mongoose.model('Blend', blendSchema);

module.exports = Blend;
