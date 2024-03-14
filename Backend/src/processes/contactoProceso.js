const contactoService = require("../services/contactoService");

const getAllContactos = async() => {
    const contactos = await contactoService.getAllContactos();
    return contactos;
};

const createNewContacto  = async(id_usuario, nombre_contacto, relacion_paciente,num_tel) => {
    const contactos = await contactoService.createNewContacto(id_usuario, nombre_contacto, relacion_paciente,num_tel);
    return contactos;
};

module.exports = {
    getAllContactos,
    createNewContacto,
};