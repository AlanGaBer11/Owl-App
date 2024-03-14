const contactoBD = require("../database/contactoBD");

const getAllContactos = async() => {
    const contactos = await contactoBD.getAllContactos();
    return contactos;
};

const createNewContacto  = async(id_usuario, nombre_contacto, relacion_paciente,num_tel) => {
    const contactos = await contactoBD.createNewContacto(id_usuario, nombre_contacto, relacion_paciente,num_tel);
    return contactos;
};

module.exports = {
    getAllContactos,
    createNewContacto,
};