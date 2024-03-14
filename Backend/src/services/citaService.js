const citaBD = require("../database/citasBD");

const getAllCitas = async() => {
    const citas = await citaBD.getAllCitas();
    return citas;
};

const getOneCita = async(citaId) => {
    const citas = await citaBD.getOneCita(citaId);
    return citas;
};

const createNewCita = async(descripcion, fecha, hora, id_usuario, nom_paciente, nom_profesional, nom_clinica) => {
    const citas = await citaBD.createNewCita(descripcion, fecha, hora, id_usuario, nom_paciente, nom_profesional, nom_clinica);
    return citas;
};

const updateOneCita = async(descripcion, fecha, hora, id_usuario, nom_paciente, nom_profesional, nom_clinica, citaId) => {
    const citas = await citaBD.updateOneCita(descripcion, fecha, hora, id_usuario, nom_paciente, nom_profesional, nom_clinica, citaId);
    return citas;
};

const deleteOneCita = async(citaId) => {
    const citas = await citaBD.deleteOneCita(citaId);
    return  citas;
};

module.exports = {
    getAllCitas,
    getOneCita,
    createNewCita,
    updateOneCita,
    deleteOneCita,
};