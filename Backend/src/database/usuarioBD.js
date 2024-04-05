const mysql = require('mysql');

const connection = mysql.createConnection({
    host:process.env.HOST_BD,
    user:process.env.USER_BD,
    password:process.env.PASSWORD_BD,
    database:process.env.NAME_BD
});

connection.connect(error =>{
    if(error)
        throw error;
    console.log("¡Conexión exitosa con tabla usuarios!");
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
const createNewUsuario = async(nom_usuario, nombre_completo, correo, passw) => {
    return new Promise(function(resolve, reject){
        const sql = "INSERT INTO owldb.usuarios (nom_usuario, nombre_completo, correo, passw) VALUES ('"+ nom_usuario +"', '"+ nombre_completo +"', '"+ correo +"', '"+ passw +"')";
        connection.query(sql, (error, results) => {
            if (error){
                return reject (error);
            }
            resolve ("Usuario agregado correctamente");
        });
    });
};

// PATCH
const updateOneUsuario = async(nom_usuario, nombre_completo, correo, passw, usuarioId) => {
    return new Promise(function(resolve, reject){
        const sql = "UPDATE owldb.usuarios SET nom_usuario = '"+ nom_usuario +"', nombre = '"+ nombre_completo + "', correo = '"+ correo +"', passw = '"+ passw +"' WHERE id_usuario = '"+ usuarioId + "'";
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

  // Login validacion 
  const loginProcess = async (correo, passw) => {
    return new Promise(function(resolve, reject) {
        const sql = `SELECT * FROM usuarios WHERE correo = ? AND passw = ?`; 
        connection.query(sql, [correo, passw], (error, results) => {
            if (error) {
                console.error('Error en la consulta SQL:', error);
                return reject(error);
            }
            resolve(results);
        });         
    }); 
};

const getOneEmail = async(correo) => {
    return new Promise(function(resolve, reject){
        const sql = "SELECT * FROM usuarios WHERE correo =? ;"; 
        connection.query(sql, [correo], (error, results)=>{
            if(error){
                console.error('Error al obtener email: ', error); 
                return reject(error); 
            }
            resolve(results); 
        });
    }); 
}

module.exports = {
    getAllUsuarios,
    getOneUsuario,
    createNewUsuario,
    updateOneUsuario,
    deleteOneUsuario,
    loginProcess,
    getOneEmail,
}