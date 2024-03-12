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
    console.log('La tabla de historial está jalando xdd'); 
}); 

// Get all 
const getAllHistorial = async() =>{
    return new Promise(function(resolve, reject){
        const sql = 'SELECT * FROM owldb.Historial_citas;'; 
        connection.query(sql, (error, results) =>{
            if(error){
                return reject(error); 
            }            
            resolve(results);         
        }); 
    }); 
}; 

// Get one
const getOneHistorial = async(id_usuario) =>{
    return new Promise(function(resolve, reject){
        const sql = 'SELECT * FROM owldb.Historial_citas WHERE id_Historial=' + id_usuario;
        connection.query(sql,(error, results)=>{
            if(error){
                return reject(error); 
            }
            resolve(results); 
        }); 
    }); 
}; 

// Post
const createNewHistorial = async(id_usuario, id_paciente, nombre_cliente, id_cita, fecha ) =>{
    return new Promise(function(resolve, reject){        
        const sql = "INSERT INTO owldb.Historial_citas (id_paciente, nombre_cliente, id_cita, fecha ) values ('"+ id_usuario +"','" 
                    + id_paciente +"','" + nombre_cliente + "','" + id_cita + "','" + fecha +"')";
        connection.query(sql,(error, results)=>{
            if(error){
                return reject(error); 
            }
            resolve("Se creó el Historial correctamente"); 
        }); 
    }); 
}; 

// Patch
const updateOneHistorial = async(id_usuario, id_paciente, nombre_cliente, id_cita, fecha ) =>{
    return new Promise(function(resolve, reject){        
        const sql = "UPDATE owldb.Historial_citas SET id_paciente = '"+ id_paciente +"', nombre_cliente= '"+ nombre_cliente 
                    +", id_cita= '"+ id_cita +"', fecha='"+ fecha +"', WHERE id_usuario = '"+ id_usuario + "'";
        connection.query(sql,(error, results)=>{
            if(error){
                return reject(error); 
            }
            resolve("Se actualizó el Historial correctamente"); 
        }); 
    }); 
}; 

// Delete
const deleteOneHistorial = async(id_usuario) =>{
    return new Promise(function(resolve, reject){        
        const sql = "DELETE * FROM owldb.Historial_citas WHERE Historial_id='"+ id_usuario+"'";
        connection.query(sql,(error, results)=>{
            if(error){
                return reject(error); 
            }
            resolve("Se eliminó el Historial correctamente"); 
        }); 
    }); 
};

module.exports = {
    getAllHistorial, 
    getOneHistorial,
    createNewHistorial, 
    updateOneHistorial, 
    deleteOneHistorial
}