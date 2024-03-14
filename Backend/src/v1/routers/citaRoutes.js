const express = require ('express');
const router = express.Router();
const citaController = require("../../controllers/citaController");

router
    .get('/', citaController.getAllCitas)
    .get("/:citaId", citaController.getOneCita)
    .post("/", citaController.createNewCita)
    .patch("/:citaId", citaController.updateOneCita)
    .delete("/:citaId", citaController.deleteOneCita)
    
module.exports = router;