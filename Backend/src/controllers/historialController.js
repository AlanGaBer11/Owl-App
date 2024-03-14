const historialProceso = require("../processes/historialProceso");

const getAllHistorial = async(req, res) => {
    const historial = await historialProceso.getAllHistorial();
    res.send(historial);
};

const createNewHistorial = async(req, res) => {
    const historial = await historialProceso.createNewHistorial(req.body.id_usuario, req.body.id_paciente, req.body.nombre_cliente, req.body.id_cita, req.body.fecha);
    res.send(historial);
};

module.exports = {
    getAllHistorial, 
    createNewHistorial,
};