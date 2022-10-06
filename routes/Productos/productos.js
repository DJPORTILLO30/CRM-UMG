const express = require("express");
const router = express.Router();
const { getProducts, getProduct, insertProducts, updateProducts,deleteProducts } = require("..controllers/Productos/productos.js");

/**
 * ruta para mostrar el detalle de un producto
 */
router.get("/", getProduct);

/**
 * ruta para mostrar el detalle de los productos
 */
router.get("/", getProducts);

/**
 * ruta para insertar un producto
 */
router.post("/", insertProducts);

/**
 * ruta para actualizar un producto
 */
router.put("/", updateProducts);

/**
 * ruta para borrar un producto
 */
router.delete("/", deleteProducts);

module.exports = router