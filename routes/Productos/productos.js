const express = require("express");
const router = express.Router();
const { getProducts, getProduct, insertProducts, updateProducts,deleteProducts } = require("../../controllers/Productos/productos.js");

/**
 * ruta para mostrar el detalle de los productos
 */
 router.get("/", getProducts);

/**
 * ruta para mostrar el detalle de un productos
 */
 router.get("/:id", getProduct);

/**
 * ruta para insertar un productos
 */
router.post("/", insertProducts);

/**
 * ruta para actualizar un productos
 */
router.put("/:id", updateProducts);

/**
 * ruta para borrar un productos
 */
router.delete("/:id", deleteProducts);

module.exports = router