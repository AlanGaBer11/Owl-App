const horarioProceso = require('../processes/horarioProceso');

const getAllHorarios = async(req, res) => {
    const horarios = await horarioProceso.getAllHorarios();
    res.send(horarios);
};

const createNewHorario = async(req, res) => {
    const horarios = await horarioProceso.createNewHorario(req.body.id_horario, req.body.desc_horario);
    res.send(horarios);
};

module.exports = {
    getAllHorarios,
    createNewHorario,
};