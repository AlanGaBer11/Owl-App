const horarioService = require('../services/horarioService');

const getAllHorarios = async() => {
    const horarios = await horarioService.getAllHorarios();
    return horarios;
};

const createNewHorario = async(id_horario, desc_horario)=> {
    const horarios = await horarioService.createNewHorario(id_horario, desc_horario);
    return horarios;
};

module.exports = {
    getAllHorarios,
    createNewHorario,
};