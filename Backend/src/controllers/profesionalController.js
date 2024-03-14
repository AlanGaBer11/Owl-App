const profesionalProceso = require('../processes/profesionalProceso');

const getAllProfesionales = async(req, res) => {
    const profesionales = await profesionalProceso.getAllProfesionales();
    res.send(profesionales);
};

const getOneProfesional = async(req, res) => {
    const profesionales = await profesionalProceso.getOneProfesional(req.params.profesionalId);
    res.send(profesionales);
};

const createNewProfesional = async(req, res) => {
    const profesionales = await profesionalProceso.createNewProfesional(req.body.nom, req.body.ap, req.body.especialidad, req.body.cedula_profesional, req.body.num_telefono, req.body.correo_elec, req.body.horario, req.body.nom_clinica);
    res.send(profesionales);
};

const updateOneProfesional = async(req, res) => {
    const profesionales = await profesionalProceso.updateOneProfesional(req.body.nom, req.body.ap, req.body.especialidad, req.body.cedula_profesional, req.body.num_telefono, req.body.correo_elec, req.body.horario, req.body.nom_clinica, req.params.profesionalId);
    res.send(profesionales);
};

const deleteOneProfesional = async(req, res) => {
    const profesionales = await profesionalProceso.deleteOneProfesional(req.params.profesionalId);
    res.send(profesionales);
};

module.exports = {
    getAllProfesionales,
    getOneProfesional,
    createNewProfesional,
    updateOneProfesional,
    deleteOneProfesional,
};