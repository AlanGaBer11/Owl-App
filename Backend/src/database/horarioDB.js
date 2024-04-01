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
    console.log("¡Conexión exitosa con tabla horario!");
});

// GETALL
const getAllHorarios = async() => {
    return new Promise(function(resolve, reject){
        const sql = 'SELECT * FROM owldb.horario;';
        connection.query(sql, (error, results) => {
            if (error){
                return reject (error);
            }
            resolve(results);
        });
    });
};

// POST
const createNewHorario = async(id_horario, desc_horario) => {
    return new Promise(function(resolve, reject){
        const sql ="INSERT INTO horario (id_horario, desc_horario) VALUES ('"+id_horario+"','"+desc_horario+"')";
        connection.query(sql, (error, results) => {
            if (error){
                return reject(error);
            }
            resolve ("Horario creado correctamente");
        });
    });
};

module.exports = {
    getAllHorarios,
    createNewHorario,
};