const historialService = require('../services/historialService');

const getAllHistorials = async() => {
    const historials = await historialService.getAllHistorials();
    return historials;
};

const getOneHistorial = async(id_usaurio) => {
    const historials = await historialService.getOneHistorial(id_usaurio);
    return historials;
};

const createNewHistorial = async(id_usuario, id_paciente, nombre_cliente, id_cita, fecha ) => {
    const historials = await historialService.createNewHistorial(id_usuario, id_paciente, nombre_cliente, id_cita, fecha );
    return historials;
};

const updateOneHistorial = async(id_usuario, id_paciente, nombre_cliente, id_cita, fecha , id_usaurio) => {
    const historials = await historialService.updateOneHistorial(id_usuario, id_paciente, nombre_cliente, id_cita, fecha , id_usaurio);
    return historials;
};

const deleteOneHistorial = async (id_usaurio) => {
    const historials = await historialService.deleteOneHistorial(id_usaurio);
    return historials;
};

module.exports = {
    getAllHistorials,
    getOneHistorial,
    createNewHistorial,
    updateOneHistorial,
    deleteOneHistorial
};