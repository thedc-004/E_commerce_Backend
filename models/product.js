const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: String,
  quantity: Number,
  price: Number,
  company: String,
});

module.exports = mongoose.model("productModel", productSchema);