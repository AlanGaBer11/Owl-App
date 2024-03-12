const historialProceso = require('../processes/historalProceso')

const getAllhistorial = async(res, req) => {
    const historial = await historialProceso.getAllhistorial(); 
    res.send(historial); 
}

const getOnehistorial = async(res, req) => {
    const historial = await historialProceso.getOnehistorial(req.params.historialId); 
    res.send(historial); 
}

const createNewhistorial = async(res, req) => {
    const historial = await historialProceso.createNewhistorial(req.body.id_usuario, req.body.id_paciente, req.body.nombre_cliente, req.body.id_cita, req.body.fecha); 
    res.send(historial); 
}

const updateOnehistorial = async(res, req) => {
    const historial = await historialProceso.updateOnehistorial(req.body.id_usuario, req.body.id_paciente, req.body.nombre_cliente, req.body.id_cita, req.body.fecha); 
    res.send(historial); 
}

const deleteOnehistorial = async(res, req) => {
    const historial = await historialProceso.deleteOnehistorial(req.params.id_usuario); 
    res.send(historial); 
}

module.exports = {
    getAllhistorial,
    getOnehistorial,
    createNewhistorial,
    updateOnehistorial,
    deleteOnehistorial,
};