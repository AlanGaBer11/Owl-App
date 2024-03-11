const mysql = require('mysql'); 

const connection = mysql.createConnection({
    host:process.env.HOST_DB, 
    user:process.env.HOST_USER, 
    password:process.env.PASSWOR_DB,
    database:process.env.NAME_DB
}); 

connection.connect(error => {
    if(error)
        throw error; 
    console.log('La db de horario está jalando xdd'); 
}); 

// Get all 
const getAllHorario = async() =>{
    return new Promise(function(resolve, reject){
        const sql = 'SELECT * FROM owldb.Horario;'; 
        connection.query(sql, (error, results) =>{
            if(error){
                return reject(error); 
            }            
            resolve(results);         
        }); 
    }); 
}; 

// Get one
const getOneHorario = async(horarioId) =>{
    return new Promise(function(resolve, reject){
        const sql = 'SELECT * FROM owldb.Horario WHERE id_horario=' + horarioId;
        connection.query(sql,(error, results)=>{
            if(error){
                return reject(error); 
            }
            resolve(results); 
        }); 
    }); 
}; 

// Post
const createNewHorario = async(horarioId, desc_horario) =>{
    return new Promise(function(resolve, reject){        
        const sql = "INSERT INTO owldb.Horario (id_horario, desc_horario) values ('"+ horarioId +"','" + desc_horario +"')";
        connection.query(sql,(error, results)=>{
            if(error){
                return reject(error); 
            }
            resolve("Se creó el horario correctamente"); 
        }); 
    }); 
}; 

// Patch
const updateOneHorario = async(horarioId, desc_horario) =>{
    return new Promise(function(resolve, reject){        
        const sql = "UPDATE owldb.Horario SET desc_horario = '"+ desc_horario  +"' WHERE id_usuario = '"+ horarioId + "'";
        connection.query(sql,(error, results)=>{
            if(error){
                return reject(error); 
            }
            resolve("Se actualizó el horario correctamente"); 
        }); 
    }); 
}; 

// Delete
const deleteOneHorario = async(horarioId) =>{
    return new Promise(function(resolve, reject){        
        const sql = "DELETE * FROM owldb.Horario WHERE horario_id='"+ horarioId+"'";
        connection.query(sql,(error, results)=>{
            if(error){
                return reject(error); 
            }
            resolve("Se eliminó el horario correctamente"); 
        }); 
    }); 
};

module.exports = {

}