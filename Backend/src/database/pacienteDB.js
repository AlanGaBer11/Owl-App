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
});

// GETALL
const getAllPaciente = async() => {
    return new Promise((resolve, reject)=>{
        const sql = 'SELECT * FROM owldb.pacientes';
        connection.query(sql, (error, results) => {
            if (error){
                return reject(error);
            }
            resolve(results);
        });
    });
};

// GETONE
const getOnePaciente = async(pacienteId) =>{
    return new Promise(function(resolve, reject){
        const sql = 'SELECT * FROM owldb.pacientes WHERE id_paciente = '+ pacienteId;
        connection.query(sql, (error, results) =>{
            if (error){
                return(reject);
            }
            resolve(results);
        });
    });
};

// POST
const createNewPaciente = async() => {
    return new Promise (function(resolve, reject){
        const sql =""
    })
}