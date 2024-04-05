const pacienteProceso = require('../processes/pacienteProceso');

const getAllPacientes = async(req, res) => {
    const pacientes = await pacienteProceso.getAllPacientes();
    res.send(pacientes);
};

const getOnePaciente = async(req, res) => {
    const pacientes = await pacienteProceso.getOnePaciente(req.params.pacienteId);
    res.send(pacientes);
};

const createNewPaciente = async(req, res) => {
    const pacientes = await pacienteProceso.createNewPaciente(req.body.registro_online, req.body.nombre_cliente, req.body.ap_pa,req.body.ap_ma,req.body.fecha_nacimiento, req.body.genero, req.body.estado_civil, req.body.contacto, req.body.antecedentes_medicos, req.body.medicamentos_actuales);
    res.send(pacientes);
};

const updateOnePaciente = async(req, res) => {
    const pacientes = await pacienteProceso.updateOnePaciente(req.body.registro_online, req.body.nombre_cliente, req.body.ap_pa,req.body.ap_ma,req.body.fecha_nacimiento, req.body.genero, req.body.estado_civil, req.body.contacto, req.body.antecedentes_medicos, req.body.medicamentos_actuales, req.params.pacienteId);
    res.send(pacientes);
};

const deleteOnePaciente = async(req, res) => {
    const pacientes = await pacienteProceso.deleteOnePaciente(req.params.pacienteId);
    res.send(pacientes);
};

module.exports = {
    getAllPacientes,
    getOnePaciente,
    createNewPaciente,
    updateOnePaciente,
    deleteOnePaciente,
};