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
    console.log("¡Conexión exitosa con tabla Profesiona_encargado!");
});

// GET ALL
const getAllProfesionales = async ()  => {
    return new Promise(function(resolve, reject){
        const sql = 'SELECT * FROM owldb.profesional_encargado;';
        connection.query(sql, (error, results) => {
            if(error){
                return reject (error);
            }
            resolve(results);
        });
    });
};

// GETONE
const getOneProfesional = async(profesionalId) => {
    return new Promise(function (resolve, reject){
        const sql = 'SELECT * FROM owldb.profesional_encargado WHERE id_pro = ' + profesionalId;
        connection.query(sql, (error, results) => {
            if(error){
                return reject(error);
            }
            resolve(results);
        });
    });
};

// POST
const createNewProfesional = async(nom, ap, especialidad, cedula_profesional, num_telefono, correo_elec, horario, nom_clinica) => {
    return new Promise(function (resolve, reject){
        const sql = "INSERT INTO owldb.profesional_encargado(nom, ap, especialidad, cedula_profesional, num_telefono, correo_elec, horario, nom_clinica) VALUES ('"+ nom +"','"+ ap +"','"+ especialidad +"','"+ cedula_profesional +"', '"+ num_telefono +"', '"+ correo_elec +"', '"+ horario +"', '"+ nom_clinica +"')";
        connection.query(sql, (error, results) => {
            if (error){
                return reject (error);
            }
            resolve("Profesional agregado correctamente")
        });
    });
};

// PATCH
const updateOneProfesional = async(nom, ap, especialidad, cedula_profesional, num_telefono, correo_elec, horario, nom_clinica, profesionalId) => {
    return new Promise(function(resolve, reject){
        const sql = "UPDATE owldb.profesional_encargado SET nom= '"+nom+"', ap='"+ap+"', especialidad='"+especialidad+"', cedula_profesional='"+cedula_profesional+"', num_telefono='"+num_telefono+"', correo_elec='"+correo_elec+"', horario='"+horario+"', nom_clinica='"+nom_clinica+"' WHERE id_pro = '"+profesionalId+"' ";
        connection.query(sql, (error, results) => {
            if (error){
                return reject(error)
            }
            resolve("Profesional actualizado correctamente")
        });
    });
};

// DEL
const deleteOneProfesional = async(profesionalId) => {
    return new Promise(function(resolve, reject){
        const sql ="DELETE FROM owldb.profesional_encargado WHERE id_pro = '"+ profesionalId +"'";
        connection.query(sql, (error, results) => {
            if (error){
                return reject (error);
            }
            resolve ("Profesional eliminado correctamente");
        });
    });
};

module.exports = {
    getAllProfesionales,
    getOneProfesional,
    createNewProfesional,
    updateOneProfesional,
    deleteOneProfesional,
};