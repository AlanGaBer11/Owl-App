const horarioBD = require('../database/horarioDB')

const getAllHorario = async() => {
    const horarios = await horarioBD.getAllHorario(); 
    return horarios; 
}

const getOneHorario = async(horarioId) => {
    const horarios = await horarioBD.getOneHorario(horarioId); 
    return horarios; 
}

const createNewHorario = async(horarioId, desc_horario) => {
    const horarios = await horarioBD.createNewHorario(horarioId, desc_horario); 
    return horarios; 
}

const updateOneHorario = async(horarioId, desc_horario) => {
    const horarios = await horarioBD.updateOneHorario(horarioId, desc_horario); 
    return horarios; 
}

const deleteOneHorario = async(horarioId) => {
    const horarios = await horarioBD.deleteOneHorario(horarioId); 
    return horarios; 
}

module.exports = {
    getAllHorario,
    getOneHorario,
    createNewHorario, 
    updateOneHorario, 
    deleteOneHorario
}