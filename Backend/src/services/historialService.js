const historialBD = require("../database/historialBD");

const getAllHistorial = async() => {
    const historial = await historialBD.getAllHistorial();
    return historial;
};

const createNewHistorial = async(id_usuario, id_paciente, nombre_cliente, id_cita, fecha) => {
    const historial = await historialBD.createNewHistorial(id_usuario, id_paciente, nombre_cliente, id_cita, fecha);
    return historial;
};

module.exports = {
    getAllHistorial,
    createNewHistorial,
};