const horarioProceso = require('../processes/horarioProceso'); 

const getAllHorario = async() => {
    const horarios = await horarioProceso.getAllHorario(); 
    return horarios; 
}

const getOneHorario = async(horarioId) => {
    const horarios = await horarioProceso.getOneHorario(horarioId); 
    return horarios; 
}

const createNewHorario = async(id_horario, desc_horario) => {
    const horarios = await horarioProceso.createNewHorario(id_horario, desc_horario); 
    return horarios; 
}

const updateOneHorario = async(id_horario, desc_horario) => {
    const horarios = await horarioProceso.updateOneHorario(id_horario, desc_horario); 
    return horarios; 
}

const deleteOneHorario = async(id_horario) => {
    const horarios = await horarioProceso.deleteOneHorario(id_horario); 
    return horarios; 
}

module.exports = {
    getAllHorario,
    getOneHorario,
    createNewHorario,
    updateOneHorario,
    deleteOneHorario,
};