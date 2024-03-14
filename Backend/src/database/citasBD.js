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
    console.log("¡Conexión exitosa con tabla citas!");
});

const getAllCitas = async() => {
    return new Promise(function (resolve, reject){
        const sql = 'SELECT * FROM owldb.citas;';
        connection.query(sql, (error, results) => {
            if (error){
                return reject (error);
            }
            resolve(results);
        });
    });
};

const getOneCita = async(citaId) => {
    return new Promise(function (resolve, reject) {
        const sql = 'SELECT * FROM owldb.citas WHERE id_cita = '+ citaId;
        connection.query(sql, (error, results) => {
            if (error){
                return reject (error);
            }
            resolve (results);
        });
    });
};

const createNewCita = async(descripcion, fecha, hora, id_usuario, nom_paciente, nom_profesional, nom_clinica) => {
    return new Promise (function (resolve, reject) {
        const sql ="INSERT INTO owldb.citas (descripcion, fecha, hora, id_usuario, nom_paciente, nom_profesional, nom_clinica) VALUES ('"+descripcion+"','"+fecha+"','"+hora+"','"+id_usuario+"','"+nom_paciente+"','"+nom_profesional+"','"+nom_clinica+"') ";
        connection.query(sql, (error, results) => {
            if (error){
                return reject (error);
            }
            resolve ("Cita agregada correctamente");
        });
    });
};

const updateOneCita = async(descripcion, fecha, hora, id_usuario, nom_paciente, nom_profesional, nom_clinica, citaId) => {
    return new Promise(function (resolve, reject){
        const sql ="UPDATE owldb.citas SET descripcion='"+descripcion+"', fecha='"+fecha+"', hora='"+hora+"', id_usuario='"+id_usuario+"', nom_paciente='"+nom_paciente+"', nom_profesional='"+nom_profesional+"', nom_clinica='"+nom_clinica+"' WHERE id_cita = '"+citaId+"' ";
        connection.query(sql, (error, results) => {
            if (error){
                return reject (error);
            }
            resolve ("Citaa actualizada correctamente");
        });
    });
};

const deleteOneCita = async(citaId) => {
    return new Promise(function (resolve, reject){
        const sql ="DELETE FROM owldb.citas WHERE id_cita='"+citaId+"'";
        connection.query(sql, (error, results) => {
            if (error){
                return reject (error);
            }
            resolve("Cita eliminada correctamente");
        });
    });
};

module.exports = {
    getAllCitas,
    getOneCita,
    createNewCita,
    updateOneCita,
    deleteOneCita,
};
