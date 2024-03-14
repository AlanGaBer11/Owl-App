const express = require ('express');
const router = express.Router();
const profesionalController = require("../../controllers/profesionalController");

router
    .get('/', profesionalController.getAllProfesionales)
    .get("/:profesionalId", profesionalController.getOneProfesional)
    .post("/", profesionalController.createNewProfesional)
    .patch("/:profesionalId", profesionalController.updateOneProfesional)
    .delete("/:profesionalId", profesionalController.deleteOneProfesional)
    
module.exports = router;