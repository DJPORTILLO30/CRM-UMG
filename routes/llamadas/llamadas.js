const { Router } = require("express");
const express = require("express");
const router= express.Router();
const {

     getItems, 
     getItem,
     createItem, 
     updateItem, 
     deleteItem
      
} = require("../../controllers/llamadas/llamadas");

router.get("/", getItems);

router.get("/:id", getItem);

router.post("/:id", createItem);

router.put("/:id", updateItem);

router.delete("/", deleteItem);


module.exports = router;