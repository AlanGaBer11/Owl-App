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
    console.log("¡Conexión exitosa con tabla historial_citas!");
});

const getAllHistorial = async() => {
    return new Promise(function (resolve, reject) {
        const sql = 'SELECT * FROM owldb.historial_citas;';
        connection.query(sql, (error, results) => {
            if (error){
                return reject (error);
            };
        resolve(results);
        });
    });
};

const createNewHistorial = async(id_usuario, id_paciente, nombre_cliente, id_cita, fecha) => {
    return new Promise(function (resolve, reject){
        const sql ="INSERT INTO owldb.historial_citas (id_usuario, id_paciente, nombre_cliente, id_cita, fecha) VALUES('"+id_usuario+"','"+id_paciente+"','"+nombre_cliente+"','"+id_cita+"','"+fecha+"')";
        connection.query(sql, (error, results) => {
            if (error){
                return reject (error);
            }
            resolve("Historial creado correctamente");
        });
    });
};

module.exports = {
    getAllHistorial,
    createNewHistorial,
};