const profesionalBD = require('../database/profesionalBD');

const getAllProfesionales = async() => {
    const profesionales = await profesionalBD.getAllProfesionales();
    return profesionales;
};

const getOneProfesional = async(profesionalId) => {
    const profesionales = await profesionalBD.getOneProfesional(profesionalId);
    return profesionales;
};

const createNewProfesional = async(nom, ap, especialidad, cedula_profesional, num_telefono, correo_elec, horario, nom_clinica) => {
    const profesionales = await profesionalBD.createNewProfesional(nom, ap, especialidad, cedula_profesional, num_telefono, correo_elec, horario, nom_clinica);
    return profesionales;
};

const updateOneProfesional = async(nom, ap, especialidad, cedula_profesional, num_telefono, correo_elec, horario, nom_clinica, profesionalId) => {
    const profesionales = await profesionalBD.updateOneProfesional(nom, ap, especialidad, cedula_profesional, num_telefono, correo_elec, horario, nom_clinica, profesionalId);
    return profesionales;
};

const deleteOneProfesional = async(profesionalId) => {
    const profesionales = await profesionalBD.deleteOneProfesional(profesionalId);
    return profesionales;
};

module.exports = {
    getAllProfesionales,
    getOneProfesional,
    createNewProfesional,
    updateOneProfesional,
    deleteOneProfesional,
};