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
    console.log('La db de Citas está jalando xdd'); 
}); 

// Get all 
const getAllCitas = async() =>{
    return new Promise(function(resolve, reject){
        const sql = 'SELECT * FROM owldb.Citas;'; 
        connection.query(sql, (error, results) =>{
            if(error){
                return reject(error); 
            }            
            resolve(results);         
        }); 
    }); 
}; 

// Get one
const getOneCitas = async(CitasId) =>{
    return new Promise(function(resolve, reject){
        const sql = 'SELECT * FROM owldb.Citas WHERE id_citas=' + CitasId;
        connection.query(sql,(error, results)=>{
            if(error){
                return reject(error); 
            }
            resolve(results); 
        }); 
    }); 
}; 

// Post
const createNewCitas = async(descripcion, fecha, hora, id_usuario, nom_paciente, nom_profesional, nom_clinica) =>{
    return new Promise(function(resolve, reject){        
        const sql = "INSERT INTO owldb.citas (descripcion, fecha, hora, id_usuario, nom_paciente, nom_profesional, nom_clinica) values ('"+ descripcion 
                    +"','" + fecha +"','" + hora +"','" + id_usuario +"','" + nom_paciente + "','" + nom_profesional+"','"+ nom_clinica +")";                    
        connection.query(sql,(error, results)=>{
            if(error){
                return reject(error); 
            }
            resolve("Se creó la cita correctamente"); 
        }); 
    }); 
}; 

// Patch
const updateOneCitas = async(CitasId, descripcion, fecha, hora, id_usuario, nom_paciente, nom_profesional, nom_clinica) =>{
    return new Promise(function(resolve, reject){        
        const sql = "UPDATE owldb.citas SET descripcion = '"+ descripcion  +"', nombre = '" + fecha + "', hora= '" + hora +
                    "', id_usuario = '" + id_usuario + "', nom_paciente = '" +nom_paciente+"', nom_profesional= '" + nom_profesional +
                    "', nom_clinica = '" + nom_clinica + "'  WHERE id_usuario = '"+ CitasId + "'";
        connection.query(sql,(error, results)=>{
            if(error){
                return reject(error); 
            }
            resolve("Se actualizó la cita correctamente"); 
        }); 
    }); 
}; 

// Delete
const deleteOneCitas = async(CitasId) =>{
    return new Promise(function(resolve, reject){        
        const sql = "DELETE * FROM owldb.citas WHERE Citas_id='"+ CitasId+"'";
        connection.query(sql,(error, results)=>{
            if(error){
                return reject(error); 
            }
            resolve("Se eliminó la cita correctamente"); 
        }); 
    }); 
};

module.exports = {
    getAllCitas, 
    getOneCitas,
    createNewCitas, 
    updateOneCitas, 
    deleteOneCitas
}