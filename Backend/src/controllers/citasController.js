const citasProceso = require('../processes/citasProceso'); 

const getAllCitas = async() => {
    const citas = await citasProceso.getAllCitas(); 
    return citas; 
}

const getOneCitas = async(citasId) => {
    const citas = await citasProceso.getOneCitas(citasId); 
    return citas; 
}

const createNewCitas = async(citasId, descripcion, fecha, hora, id_usuario, nom_paciente, nom_profesional, nom_clinica) => {
    const citas = await citasProceso.createNewCitas(citasId, descripcion, fecha, hora, id_usuario, nom_paciente, nom_profesional, nom_clinica); 
    return citas; 
}

const updateOneCitas = async(citasId, descripcion, fecha, hora, id_usuario, nom_paciente, nom_profesional, nom_clinica) => {
    const citas = await citasProceso.updateOneCitas(citasId, descripcion, fecha, hora, id_usuario, nom_paciente, nom_profesional, nom_clinica); 
    return citas; 
}

const deleteOneCitas = async(citasId) => {
    const citas = await citasProceso.deleteOneCitas(citasId); 
    return citas; 
}

module.exports = {
    getAllCitas,
    getOneCitas,
    createNewCitas,
    updateOneCitas,
    deleteOneCitas,
};