const clinicaDB = require('../database/clinicaBD');

const getAllClinicas = async() => {
    const clinicas = await clinicaDB.getAllClinicas();
    return  clinicas;
};

const getOneClinica = async(clinicaId) => {
    const clinicas = await clinicaDB.getOneClinica(clinicaId);
    return clinicas;
};

const createNewClinica = async (nombre, descripcion, direccion, num_tel) => {
    const clinicas = await clinicaDB.createNewClinica(nombre, descripcion, direccion, num_tel);
    return clinicas;
};

const updateOneClinica = async (nombre, descripcion, direccion, num_tel, clinicaId) => {
    const clinicas = await clinicaDB.updateOneClinica(nombre, descripcion, direccion, num_tel, clinicaId);
    return clinicas;
};

const deleteOneClinica = async(clinicaId) => {
    const clinicas = await clinicaDB.deleteOneClinica(clinicaId);
    return clinicas;        
};

module.exports = {
    getAllClinicas, 
    getOneClinica,
    createNewClinica,
    updateOneClinica,
    deleteOneClinica,
};