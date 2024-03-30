const usuarioProceso = require('../processes/usuarioProceso');

const getAllUsuarios = async (req, res) => {
    const usuarios = await usuarioProceso.getAllUsuarios();
    res.send(usuarios);
};

const getOneUsuario = async(req, res) => {
    const usuarios = await usuarioProceso.getOneUsuario(req.params.usuarioId);
    res.send(usuarios);
};

const createNewUsuario = async(req,res) =>{
    const usuarios = await usuarioProceso.createNewUsuario(req.body.nom_usuario,req.body.nombre_completo, req.body.correo, req.body.passw);
    res.send(usuarios);
};

const updateOneUsuario = async(req, res) => {
    const usuarios = await usuarioProceso.updateOneUsuario(req.body.nom_usuario,req.body.nombre_completo, req.body.correo, req.body.passw, req.params.usuarioId);
    res.send(usuarios);
};

const deleteOneUsuario = async(req, res) => {
    const usuarios = await usuarioProceso.deleteOneUsuario(req.params.usuarioId);
    res.send(usuarios);
};

const loginProcess = async(req, res) => {
    const {correo, passw} = req.body; 
    const usuarios = await usuarioProceso.loginProcess(correo, passw); 
    res.send(usuarios); 
}


module.exports = {
    getAllUsuarios,
    getOneUsuario,
    createNewUsuario,
    updateOneUsuario,
    deleteOneUsuario, 
    loginProcess,
};