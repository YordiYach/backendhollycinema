const Factura = require("../model/factura");

const getfacturas = async (req, res) => {
    try {
        const facturas = await Factura.find({}, { _id: 1, pelicula: 1, sala: 1, asientos: 1, horario: 1, total: 1 }).lean();
        // consulta todos los usuarios y devuelve solo los campos requeridos
        res.json(facturas); // envía la lista de usuarios como respuesta en formato JSON
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener la lista de Facturas' });
    }
}

module.exports = getfacturas;