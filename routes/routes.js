const express = require("express");
const router = express.Router();

const { getAllProducts, getSingleProduct, UpdateProduct, deleteProduct, AddProduct } = require("../controllers/controller");


router.route("/").get(getAllProducts).post(AddProduct);
router.route("/:id").get(getSingleProduct).patch(UpdateProduct).delete(deleteProduct);

module.exports = router;