const usuarioBD = require('../database/usuarioBD');

const getAllUsuarios = async() => {
    const usuarios = await usuarioBD.getAllUsuarios();
    return usuarios;
};

const getOneUsuario = async(usuarioId) => {
    const usuarios = await usuarioBD.getOneUsuario(usuarioId);
    return usuarios;
};

const createNewUsuario = async (nom_usuario, nombre_completo, correo, passw) => {
    const usuarios = await usuarioBD.createNewUsuario(nom_usuario, nombre_completo, correo, passw);
    return usuarios;
};

const updateOneUsuario = async(nom_usuario, nombre_completo, correo, passw, usuarioId) => {
    const usuarios = await usuarioBD.updateOneUsuario(nom_usuario, nombre_completo, correo, passw, usuarioId);
    return usuarios;
};

const deleteOneUsuario = async (usuarioId) => {
    const usuarios = await usuarioBD.deleteOneUsuario(usuarioId);
    return usuarios;
};

const loginProcess = async (correo, passw) => {
    const usuarios = await usuarioBD.loginProcess(correo, passw); 
    return usuarios; 
}

module.exports = {
    getAllUsuarios,
    getOneUsuario,
    createNewUsuario,
    updateOneUsuario,
    deleteOneUsuario,
    loginProcess,
};
