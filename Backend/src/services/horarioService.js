const horarioBD = require('../database/horarioDB');

const getAllHorarios = async() => {
    const horarios = await horarioBD.getAllHorarios();
    return  horarios;
};

const createNewHorario = async(id_horario, desc_horario)=> {
    const horarios = await horarioBD.createNewHorario(id_horario, desc_horario);
    return horarios;
};

module.exports = {
    getAllHorarios,
    createNewHorario,
};