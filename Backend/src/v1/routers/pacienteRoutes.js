const express = require ('express');
const router = express.Router();
const pacienteController = require("../../controllers/pacienteController")

router
    .get('/', pacienteController.getAllPaciente)
    .get("/:pacienteId", pacienteController.getOnePaciente)
    .post("/", pacienteController.createNewPaciente)
    .patch("/:pacienteId", pacienteController.updateOnePaciente)
    .delete("/:pacienteId", pacienteController.deleteOnePaciente)
    
module.exports = router;