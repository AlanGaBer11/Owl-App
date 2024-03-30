const usuarioService = require('../services/usuarioService');

const getAllUsuarios = async() => {
    const usuarios = await usuarioService.getAllUsuarios();
    return usuarios;
};

const getOneUsuario = async(usuarioId) => {
    const usuarios = await usuarioService.getOneUsuario(usuarioId);
    return usuarios;
};

const createNewUsuario = async(nom_usuario, nombre_completo, correo, passw) => {
    const usuarios = await usuarioService.createNewUsuario(nom_usuario, nombre_completo, correo, passw);
    return usuarios;
};

const updateOneUsuario = async(nom_usuario, nombre_completo, correo, passw, usuarioId) => {
    const usuarios = await usuarioService.updateOneUsuario(nom_usuario, nombre_completo, correo, passw, usuarioId);
    return usuarios;
};

const deleteOneUsuario = async (usuarioId) => {
    const usuarios = await usuarioService.deleteOneUsuario(usuarioId);
    return usuarios;
};

const loginProcess = async(correo, passw) =>{
    const usuarios = await usuarioService.loginProcess(correo, passw); 
    return usuarios; 
}; 

module.exports = {
    getAllUsuarios,
    getOneUsuario,
    createNewUsuario,
    updateOneUsuario,
    deleteOneUsuario,
    loginProcess,
};