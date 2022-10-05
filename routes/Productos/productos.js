const express = require("express");
const router = express.Router();
const { getProducts, getProduct, insertProducts, updateProducts,deleteProducts } = require("..controllers/Productos/productos.js");


router.get("/", getProducts);
router.get("/", getProduct);
router.post("/", insertProducts);
router.put("/", updateProducts);
router.delete("/", deleteProducts);

module.exports = router