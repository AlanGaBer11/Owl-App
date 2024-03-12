const historialDB = require('../database/historialDB'); 

const getAllHistorial = async() => {
    const historial = await historialDB.getAllHistorial(); 
    return historial; 
}

const getOneHistorial = async(id_usaurio) => {
    const historial = await historialDB.getOneHistorial(id_usaurio); 
    return historial; 
}

const createNewHistorial = async(id_usaurio, id_paciente, nombre_cliente, id_cita, fecha ) => {
    const historial = await historialDB.createNewHistorial(id_usaurio, id_usuario, id_paciente, nombre_cliente, id_cita, fecha ); 
    return historial; 
}

const updateOneHistorial = async(id_usaurio, id_paciente, nombre_cliente, id_cita, fecha ) => {
    const historial = await historialDB.updateOneHistorial(id_usaurio, id_paciente, nombre_cliente, id_cita, fecha ); 
    return historial; 
}

const deleteOneHistorial = async(id_usaurio) => {
    const historial = await historialDB.deleteOneHistorial(id_usaurio); 
    return historial; 
}

module.exports = {
    getAllHistorial,
    getOneHistorial,
    createNewHistorial, 
    updateOneHistorial, 
    deleteOneHistorial
}