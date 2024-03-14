const express = require ('express');
const router = express.Router();
const clinicaController = require("../../controllers/clinicaController")

router
    .get('/', clinicaController.getAllClinicas)
    .get("/:clinicaId", clinicaController.getOneClinica)
    .post("/", clinicaController.createNewClinica)
    .patch("/:clinicaId", clinicaController.updateOneClinica)
    .delete("/:clinicaId", clinicaController.deleteOneClinica)
    
module.exports = router;