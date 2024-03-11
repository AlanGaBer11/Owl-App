const mysql = require('mysql');

const connection = mysql.createConnection({
    host:process.env.HOST_BD,
    user:process.env.USER_BD,
    password:process.env.PASSWOR_BD,
    database:process.env.NAME_BD
});

connection.connect(error =>{
    if(error)
        throw error;
    console.log("SI JALO JAJAJAJJA");
});

// GETALL
const getAllUsuarios = async() => {
    return new Promise(function(resolve, reject) {
        const sql = 'SELECT * FROM owldb.usuarios;';
        connection.query(sql, (error, results) => {
            if (error){
                return reject (error);
            }
            resolve (results);
        });
    });
};

// GETONE
const getOneUsuario = async(usuarioId) => {
    return new Promise(function(resolve, reject) {
        const sql = 'SELECT * FROM owldb.usuarios WHERE id_usuario=' + usuarioId;
        connection.query(sql, (error, results) => {
            if (error){
                return reject (error);
            }
            resolve (results);
        });
    });
};

// POST
const createNewUsuario = async(nom_usuario, nombre, ap_paterno, ap_materno, correo, passw) => {
    return new Promise(function(resolve, reject){
        const sql = "INSERT INTO owldb.usuarios (nom_usuario, nombre, ap_paterno, ap_materno, correo, passw) VALUES ('"+ nom_usuario +"', '"+ nombre +"', '"+ ap_paterno +"', '"+ ap_materno +"', '"+ correo +"', '"+ passw +"')";
        connection.query(sql, (error, results) => {
            if (error){
                return reject (error);
            }
            resolve ("Usuario agregado correctamente");
        });
    });
};

// PATCH
const updateOneUsuario = async(nom_usuario, nombre, ap_paterno, ap_materno, correo, passw, usuarioId) => {
    return new Promise(function(resolve, reject){
        const sql = "UPDATE owldb.usuarios SET nom_usuario = '"+ nom_usuario +"', nombre = '"+ nombre +"', ap_paterno = '"+ ap_paterno +"', ap_materno = '"+ ap_materno +"', correo = '"+ correo +"', passw = '"+ passw +"' WHERE id_usuario = '"+ usuarioId + "'";
        connection.query(sql, (error, results) => {
            if (error){
                return reject (error);
            }
            resolve ("Usuario actualizado correctamente");
        });
    });
};

// DELETE
const deleteOneUsuario = async(usuarioId) => {
    return new Promise(function(resolve, reject){
        const sql = "DELETE FROM owldb.usuarios WHERE id_usuario = '"+ usuarioId + "'";
        connection.query(sql, (error, results) => {
            if (error){
                return reject (error);
            }
            resolve ("Usuario eliminado correctamente");
        });
    });
};



module.exports = {
    getAllUsuarios,
    getOneUsuario,
    createNewUsuario,
    updateOneUsuario,
    deleteOneUsuario,
}