const horarioProceso = require('../processes/horarioProceso'); 

const getAllHorario = async() => {
    const horarios = await horarioProceso.getAllHorario(); 
    res.send(horarios); 
}

const getOneHorario = async(req, res) => {
    const horarios = await horarioProceso.getOneHorario(req.params.horarioId); 
    res.send(horarios); 
}

const createNewHorario = async(req, res) => {
    const horarios = await horarioProceso.createNewHorario(req.params.horarioId, req.body.desc_horario); 
    res.send(horarios); 
}

const updateOneHorario = async(req, res) => {
    const horarios = await horarioProceso.updateOneHorario(req.params.horarioId, req.body.desc_horario); 
    res.send(horarios); 
}

const deleteOneHorario = async(req, res) => {
    const horarios = await horarioProceso.deleteOneHorario(req.params.horarioId); 
    res.send(horarios); 
}

module.exports = {
    getAllHorario,
    getOneHorario,
    createNewHorario,
    updateOneHorario,
    deleteOneHorario,
};