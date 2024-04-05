const pacienteDB = require('../database/pacienteDB');

const getAllPacientes = async() =>{
    const pacientes = await pacienteDB.getAllPacientes();
    return pacientes;
};

const getOnePaciente = async(pacienteId) => {
    const pacientes = await pacienteDB.getOnePaciente(pacienteId);
    return pacientes;
};

const createNewPaciente = async(registro_online, nombre_cliente, ap_pa, ap_ma, fecha_nacimiento, genero, estado_civil, contacto, antecedentes_medicos, medicamentos_actuales) => {
    const pacientes = await pacienteDB.createNewPaciente(registro_online, nombre_cliente, ap_pa, ap_ma, fecha_nacimiento, genero, estado_civil, contacto, antecedentes_medicos, medicamentos_actuales);
    return pacientes;
};

const updateOnePaciente = async(registro_online, nombre_cliente, ap_pa, ap_ma, fecha_nacimiento, genero, estado_civil, contacto, antecedentes_medicos, medicamentos_actuales, pacienteId) =>{
    const pacientes = await pacienteDB.updateOnePaciente(registro_online, nombre_cliente, ap_pa, ap_ma, fecha_nacimiento, genero, estado_civil, contacto, antecedentes_medicos, medicamentos_actuales, pacienteId);
    return pacientes;
};

const deleteOnePaciente = async(pacienteId) => {
    const pacientes = await pacienteDB.deleteOnePaciente(pacienteId);
    return pacientes;
};

module.exports = {
    getAllPacientes,
    getOnePaciente,
    createNewPaciente,
    updateOnePaciente,
    deleteOnePaciente,
};
