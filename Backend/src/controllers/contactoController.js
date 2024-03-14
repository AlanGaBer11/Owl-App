const contactProceso = require("../processes/contactoProceso");

const getAllContactos = async(req, res) => {
    const contactos = await contactProceso.getAllContactos();
    res.send(contactos);
};

const createNewContacto = async(req, res) => {
    const contactos = await contactProceso.createNewContacto(req.body.id_usuario, req.body.nombre_contacto, req.body.relacion_paciente, req.body.num_tel);
    res.send(contactos);
};

module.exports = {
    getAllContactos,
    createNewContacto,
};