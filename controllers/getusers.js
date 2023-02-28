const Usuario = require("../model/usuario");

const getusers = async (req, res) => {
    try {
        const users = await Usuario.find({}, { _id: 1 ,nombre: 1, apellido: 1, identificacion: 1,correo: 1 , telefono: 1, creditos: 1 }).lean();
        // consulta todos los usuarios y devuelve solo los campos requeridos

        res.json(users); // envía la lista de usuarios como respuesta en formato JSON
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener la lista de usuarios' });
    }
}

module.exports = getusers;