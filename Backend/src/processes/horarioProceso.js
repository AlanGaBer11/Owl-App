const horarioService = require('../services/horarioService'); 

const getAllHorario = async() => {
    const horarios = await horarioService.getAllHorario(); 
    return horarios; 
}

const getOneHorario = async(horarioId) => {
    const horarios = await horarioService.getOneHorario(horarioId); 
    return horarios; 
}

const createNewHorario = async(horarioId, desc_horario) => {
    const horarios = await horarioService.createNewHorario(horarioId, desc_horario); 
    return horarios; 
}

const updateOneHorario = async(horarioId, desc_horario) => {
    const horarios = await horarioService.updateOneHorario(horarioId, desc_horario); 
    return horarios; 
}

const deleteOneHorario = async(horarioId) => {
    const horarios = await horarioService.deleteOneHorario(horarioId); 
    return horarios; 
}

module.exports = {
    getAllHorario,
    getOneHorario,
    createNewHorario, 
    updateOneHorario, 
    deleteOneHorario
}