const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.HOST_BD,
    user: process.env.USER_BD,
    password: process.env.PASSWOR_BD,
    database: process.env.NAME_BD
});

connection.connect(error => {
    if (error)
        throw error;
    console.log("¡Conexión exitosa con tabla pacientes!");
});

// GETALL
const getAllPacientes = async () => {
    return new Promise(function (resolve, reject) {
        const sql = 'SELECT  * FROM owldb.paciente;';
        connection.query(sql, (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
};

// GETONE
const getOnePaciente = async (pacienteId) => {
    return new Promise(function (resolve, reject) {
        const sql = 'SELECT  * FROM owldb.paciente WHERE id_paciente =' + pacienteId;
        connection.query(sql, (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
};

// POST
const createNewPaciente = async (registro_online, id_usuario, nombre_cliente, ap_pa, ap_ma, fecha_nacimiento, genero, estado_civil, contacto, antecedentes_medicos, medicamentos_actuales) => {
    return new Promise(function (resolve, reject) {
        const sql = "INSERT INTO owldb.paciente (registro_online, id_usuario, nombre_cliente, ap_pa, ap_ma, fecha_nacimiento, genero, estado_civil, contacto, antecedentes_medicos, medicamentos_actuales) VALUES ('" + registro_online + "','" + id_usuario + "','" + nombre_cliente + "','" + ap_pa + "','" + ap_ma + "','" + fecha_nacimiento + "','" + genero + "','" + estado_civil + "','" + contacto + "','" + antecedentes_medicos + "','" + medicamentos_actuales + "')";
        connection.query(sql, (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve("Paciente agregado correctamente");
        });
    });
};

// PATCH
const updateOnePaciente = async (registro_online, id_usuario, nombre_cliente, ap_pa, ap_ma, fecha_nacimiento, genero, estado_civil, contacto, antecedentes_medicos, medicamentos_actuales, pacienteId) => {
    return new Promise(function (resolve, reject) {
        const sql = "UPDATE owldb.paciente SET registro_online = '" + registro_online + "', id_usuario = '" + id_usuario + "', nombre_cliente = '" + nombre_cliente + "', ap_pa = '" + ap_pa + "', ap_ma = '" + ap_ma + "', fecha_nacimiento = '" + fecha_nacimiento + "', genero = '" + genero + "', estado_civil = '" + estado_civil + "', contacto = '" + contacto + "', antecedentes_medicos = '" + antecedentes_medicos + "', medicamentos_actuales = '" + medicamentos_actuales + "' WHERE id_paciente = '" + pacienteId + "'";
        connection.query(sql, (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve("Paciente actualizado correctamente");
        });
    });
};

// DELETE
const deleteOnePaciente = async (pacienteId) => {
    return new Promise(function (resolve, reject) {
        const sql = "DELETE FROM owldb.paciente WHERE id_paciente = '" + pacienteId + "'";
        connection.query(sql, (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve("Paciente eliminado correctamente");
        });
    });
};

module.exports = {
    getAllPacientes,
    getOnePaciente,
    createNewPaciente,
    updateOnePaciente,
    deleteOnePaciente,
}
