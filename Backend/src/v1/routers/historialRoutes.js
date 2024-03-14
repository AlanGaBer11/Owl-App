const express = require ('express');
const router = express.Router();
const historialController = require("../../controllers/historialController");

router
    .get('/', historialController.getAllHistorial)
    .post("/", historialController.createNewHistorial)
    
module.exports = router;