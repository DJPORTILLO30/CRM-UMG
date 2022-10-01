const express = require("express");
const router = express.Router();
const { getItems, getItem, createItem, updateItem, deleteItem } = require("../controllers/productos");


router.get("/", getItems);
router.get("/", getItem);
router.post("/", createItem);
router.put("/", updateItem);
router.delete("/", deleteItem);

module.exports = router
