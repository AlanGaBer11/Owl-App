const historialService = require("../services/historialService");

const getAllHistorial = async() => {
    const historial = await historialService.getAllHistorial();
    return historial;
};

const createNewHistorial = async(id_usuario, id_paciente, nombre_cliente, id_cita, fecha) => {
    const historial = await historialService.createNewHistorial(id_usuario, id_paciente, nombre_cliente, id_cita, fecha);
    return historial;
};

module.exports = {
    getAllHistorial,
    createNewHistorial,
};