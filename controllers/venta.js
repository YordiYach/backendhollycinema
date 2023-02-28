const Factura  = require("../model/factura");
const Usuario = require("../model/usuario");


async function crearFactura(req, res) {
    const { id } = req.params; // ID del usuario
    const {
        pelicula,
        sala,
        asientos,
        horario,
        total
    } = req.body;

    try {
        // Creamos la factura en la base de datos
        const factura = await Factura.create({
            pelicula,
            sala,
            asientos,
            horario,
            total
        });

        // Agregamos la nueva factura al array de facturas del usuario
        const usuario = await Usuario.findByIdAndUpdate(
            id,
            { $push: { facturas: factura._id } },
            { new: true }
        ).populate("facturas");

        // Devolvemos la factura creada en la respuesta
        return res.json({ factura, usuario });
    } catch (error) {
        // Si hay un error, devolvemos un error 500 con el mensaje de error correspondiente
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
}

module.exports = {
    crearFactura,
};
