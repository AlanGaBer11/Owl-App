const express = require ('express');
const router = express.Router();
const usuarioController = require("../../controllers/usuarioController")

router
    .get('/', usuarioController.getAllUsuarios)
    .get("/:pacienteId", usuarioController.getOneUsuario)
    .post("/:pacienteId", usuarioController.createNewUsuario)
    .patch("/:pacienteId", usuarioController.updateOneUsuario)
    .delete("/:pacienteId", usuarioController.deleteOneUsuario)
    
module.exports = router;