const express = require ('express');
const router = express.Router();
const horarioController = require('../../controllers/horarioController'); 

router 
    .get('/', horarioController.getAllHorario)
    .get('/:horarioId', horarioController.getOneHorario)
    .post('/', horarioController.createNewHorario)
    .patch('/:horarioId', horarioController.updateOneHorario)
    .delete('/:horarioId', horarioController.deleteOneHorario)

module.exports = router; 