const productModel = require("../models/product");

const getAllProducts = async (req, res) => {
  try {
    const product = await productModel.find({});
    res.json({ product }).status(200);
  } catch (error) {
    res.json({ error }).status(500);
  }
};

const getSingleProduct = async (req, res) => {
  try {
    const { id: productId } = req.params;
    const product = await productModel.findOne({ _id: productId });
    if (!product) {
      res.send("Product not found").status(404);
    }
    res.json({ product }).status(200);
  } catch (error) {
    res.json({ error }).status(500);
  }
};
const AddProduct = async (req, res) => {
  try {
    const product = await productModel.create(req.body);
    res.json({ product }).status(200);
  } catch (error) {
    res.json({ error }).status(500);
  }
};
const UpdateProduct = async (req, res) => {
  try {
    const { id: productId } = req.params;
    const product = await productModel.findOneAndUpdate(
      { _id: productId },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!product) {
      res.send("Product not found").status(404);
    }
    res.json({ product }).status(200);
  } catch (error) {
    res.json({ error }).status(500);
  }
};
const deleteProduct = async (req, res) => {
  try {
    const { id: productId } = req.params;
    const product = await productModel.findOneAndDelete({ _id: productId });
    if (!product) {
      res.send("Product not found").status(404);
    }
    res.json({ product }).status(200);
  } catch (error) {
    res.json({ error }).status(500);
  }
};

module.exports = {
  getAllProducts,
  getSingleProduct,
  UpdateProduct,
  deleteProduct,
  AddProduct
};