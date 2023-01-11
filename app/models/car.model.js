const mongoose = require("mongoose");

const Car = mongoose.model(
  "Car",
  new mongoose.Schema({
    make: String,
    model: String,
    year: String,
    nama: String,
  })
);

module.exports = Car;