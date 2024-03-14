const citasProceso = require('../processes/citasProceso'); 

const getAllCitas = async(res, req) => {
    const citas = await citasProceso.getAllCitas(); 
    res.send(citas); 
}

const getOneCitas = async(res, req) => {
    const citas = await citasProceso.getOneCitas(req.params.citasId); 
    res.send(citas); 
}

const createNewCitas = async(res, req) => {
    const citas = await citasProceso.createNewCitas(req.body.descripcion, req.body.fecha, req.body.hora, req.params.id_usuario, req.body.nom_paciente, req.body.nom_profesional, req.body.nom_clinica); 
    res.send(citas); 
}

const updateOneCitas = async(res, req) => {
    const citas = await citasProceso.updateOneCitas(req.body.descripcion, req.body.fecha, req.body.hora, req.params.id_usuario, req.body.nom_paciente, req.body.nom_profesional, req.body.nom_clinica); 
    res.send(citas); 
}

const deleteOneCitas = async(res, req) => {
    const citas = await citasProceso.deleteOneCitas(req.params.citasId); 
    res.send(citas); 
}

module.exports = {
    getAllCitas,
    getOneCitas,
    createNewCitas,
    updateOneCitas,
    deleteOneCitas,
};