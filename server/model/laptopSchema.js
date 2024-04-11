const mongoose = require("mongoose");

const laptopSchema = new mongoose.Schema({
    filename: String,
    data: Buffer,
    title: String,
    price: Number,
    count: Number,
    description: String
  });
  
  // Define a model based on the schema

const Laptop = mongoose.model('Laptop', laptopSchema);
module.exports = Laptop;
