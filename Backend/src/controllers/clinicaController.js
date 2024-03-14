const clinicaProceso = require('../processes/clinicaProceso');

const getAllClinicas = async(req, res) => {
    const clinicas = await clinicaProceso.getAllClinicas();
    res.send(clinicas);
};

const getOneClinica = async(req, res) => {
    const clinicas = await clinicaProceso.getOneClinica(req.params.clinicaId);
    res.send(clinicas)
};

const createNewClinica = async (req, res) => {
    const clinicas = await clinicaProceso.createNewClinica(req.body.nombre, req.body.descripcion, req.body.direccion, req.body.num_tel);
    res.send(clinicas);
};

const updateOneClinica = async (req, res) => {
    const clinicas = await clinicaProceso.updateOneClinica(req.body.nombre, req.body.descripcion, req.body.direccion, req.body.num_tel, req.params.clinicaId);
    res.send(clinicas);
};

const deleteOneClinica = async(req, res) => {
    const clinicas = await clinicaProceso.deleteOneClinica(req.params.clinicaId);
    res.send(clinicas);
};

module.exports = {
    getAllClinicas,
    getOneClinica,
    createNewClinica,
    updateOneClinica,
    deleteOneClinica,
};