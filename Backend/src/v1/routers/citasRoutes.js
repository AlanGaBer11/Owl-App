const express = require('express'); 
const router = express.Router(); 
const citasRoute = require('../../controllers/citasController')

router 
    .get('/', citasRoute.getAllCitas)
    .get('/:CitasId', citasRoute.getOneCitas)
    .post('/', citasRoute.createNewCitas)
    .patch('/:CitasId', citasRoute.updateOneCitas)
    .delete('/:CitasId', citasRoute.deleteOneCitas)

module.exports = router; 