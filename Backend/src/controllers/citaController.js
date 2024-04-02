const citasProceso = require("../processes/citaProceso");

const getAllCitas = async(req, res) => {
    const citas = await citasProceso.getAllCitas();
    res.send(citas);
};

const getOneCita = async(req, res) => {
    const citas = await citasProceso.getOneCita(req.params.citaId);
    res.send(citas);
};

const createNewCita = async(req, res) => {
    const citas = await citasProceso.createNewCita(req.body.descripcion, req.body.fecha, req.body.hora, req.body.nom_paciente, req.body.nom_profesional, req.body.nom_clinica);
    res.send(citas);
};
const updateOneCita = async(req, res) => {
    const citas = await citasProceso.updateOneCita(req.body.descripcion, req.body.fecha, req.body.hora, req.body.nom_paciente, req.body.nom_profesional, req.body.nom_clinica, req.params.citaId);
    res.send(citas);
};

const deleteOneCita = async(req, res) => {
    const citas = await citasProceso.deleteOneCita(req.params.citaId);
    res.send(citas);
};

module.exports = {
    getAllCitas,
    getOneCita,
    createNewCita,
    updateOneCita,
    deleteOneCita,
};