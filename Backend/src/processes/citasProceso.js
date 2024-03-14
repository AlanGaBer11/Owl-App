const citasService = require('../services/citasService'); 

const getAllCitas = async() => {
    const citas = await citasService.getAllCitas(); 
    return citas; 
}

const getOneCitas = async(citasId) => {
    const citas = await citasService.getOneCitas(citasId); 
    return citas; 
}

const createNewCitas = async(citasId, descripcion, fecha, hora, id_usuario, nom_paciente, nom_profesional, nom_clinica) => {
    const citas = await citasService.createNewCitas(citasId, descripcion, fecha, hora, id_usuario, nom_paciente, nom_profesional, nom_clinica); 
    return citas; 
}

const updateOneCitas = async(citasId, descripcion, fecha, hora, id_usuario, nom_paciente, nom_profesional, nom_clinica) => {
    const citas = await citasService.updateOneCitas(citasId, descripcion, fecha, hora, id_usuario, nom_paciente, nom_profesional, nom_clinica); 
    return citas; 
}

const deleteOneCitas = async(citasId) => {
    const citas = await citasService.deleteOneCitas(citasId); 
    return citas; 
}

module.exports = {
    getAllCitas,
    getOneCitas,
    createNewCitas,
    updateOneCitas,
    deleteOneCitas,
};