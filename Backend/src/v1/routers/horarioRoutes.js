const express = require ('express');
const router = express.Router();
const horarioController = require("../../controllers/horarioController");

router
    .get('/', horarioController.getAllHorarios)
    .post("/", horarioController.createNewHorario)
    
module.exports = router;