const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.HOST_BD,
    user: process.env.USER_BD,
    password: process.env.PASSWORD_BD,
    database: process.env.NAME_BD
});

connection.connect(error => {
    if (error)
        throw error;
    console.log("¡Conexión exitosa con tabla clinicas!");
});

// GETALL
const getAllClinicas = async() => {
    return new Promise(function(resolve, reject) {
        const sql = 'SELECT * FROM owldb.clinicas;';
        connection.query(sql, (error, results) => {
            if (error){
                return reject (error);
            }
            resolve (results);
        });
    });
};

// GETONE
const getOneClinica = async(clinicaId) => {
    return new Promise(function(resolve, reject) {
        const sql = 'SELECT * FROM owldb.clinicas WHERE id_clinica=' + clinicaId;
        connection.query(sql, (error, results) => {
            if (error){
                return reject (error);
            }
            resolve (results);
        });
    });
};

const createNewClinica = async(nombre, descripcion, direccion, num_tel) => {
    return new Promise(function (resolve, reject){
        const sql = "INSERT INTO owldb.clinicas (nombre, descripcion, direccion, num_tel) VALUES ('"+ nombre +"','"+ descripcion +"','"+ direccion +"','"+ num_tel +"')";
        connection.query(sql,(error, results) => {
            if(error){
                return reject(error);
            }
            resolve("Clinica agragada correctamente");
        });
    });
};

const updateOneClinica = async(nombre, descripcion, direccion, num_tel, clinicaId) =>{
    return new Promise(function (resolve, reject){
        const sql = "UPDATE owldb.clinicas SET nombre='"+nombre+"', descripcion = '"+descripcion+"', direccion = '"+direccion+"', num_tel = '"+num_tel+"' WHERE id_clinica = '"+clinicaId+"'";
        connection.query(sql, (error, results) => {
            if(error){
                return reject(error);
            }
            resolve("Clinica actualizada correctamente");
        });
    });
};

const deleteOneClinica = async(clinicaId) => {
    return new Promise(function (resolve, reject){
        const sql = "DELETE FROM owldb.clinicas WHERE id_clinica ='"+clinicaId+"'";
        connection.query(sql, (error, results) =>{
            if(error){
                return reject(error);
            }
            resolve("Clinica  eliminada correctamente")
        });
    });
};

module.exports = {
    getAllClinicas,
    getOneClinica,
    createNewClinica,
    updateOneClinica,
    deleteOneClinica,
};