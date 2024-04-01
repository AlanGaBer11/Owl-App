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
    console.log("¡Conexión exitosa con tabla contacto_emergencia!");
});

const getAllContactos = async() => {
    return new Promise(function (resolve, reject) {
        const sql ="SELECT * FROM owldb.contacto_emergencia;";
        connection.query(sql, (error, results)=> {
            if (error) {
                return reject (error);
            }
            resolve(results);
        });
    });
};

const createNewContacto = async (id_usuario, nombre_contacto, relacion_paciente,num_tel) => {
    return new Promise(function (resolve, reject) {
        const sql = "INSERT INTO owldb.contacto_emergencia (id_usuario, nombre_contacto, relacion_paciente,num_tel) VALUES('"+id_usuario+"','"+nombre_contacto+"','"+relacion_paciente+"','"+num_tel+"') ";
        connection.query(sql, (error, results) => {
            if (error){
                return reject (error);
            }
            resolve("Contacto creado correctamente");
        });
    });
};

module.exports = {
    getAllContactos,
    createNewContacto,
};