const clinicaService = require('../services/clinicaService');

const getAllClinicas = async() => {
    const clinicas = await clinicaService.getAllClinicas();
    return  clinicas;
};

const getOneClinica = async(clinicaId) => {
    const clinicas = await clinicaService.getOneClinica(clinicaId);
    return clinicas;
};

const createNewClinica = async (nombre, descripcion, direccion, num_tel) => {
    const clinicas = await clinicaService.createNewClinica(nombre, descripcion, direccion, num_tel);
    return clinicas;
};

const updateOneClinica = async (nombre, descripcion, direccion, num_tel, clinicaId) => {
    const clinicas = await clinicaService.updateOneClinica(nombre, descripcion, direccion, num_tel, clinicaId);
    return clinicas;
};

const deleteOneClinica = async(clinicaId) => {
    const clinicas = await clinicaService.deleteOneClinica(clinicaId);
    return clinicas;        
};

module.exports = {
    getAllClinicas, 
    getOneClinica,
    createNewClinica,
    updateOneClinica,
    deleteOneClinica,
};