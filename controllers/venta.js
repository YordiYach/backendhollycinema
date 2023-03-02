const Factura = require("../model/factura");
const Usuario = require("../model/usuario");


async function crearFactura(req, res) {
    const { id } = req.user; // ID del usuario
    const {
        pelicula,
        sala,
        asientos,
        horario,
        total
    } = req.body;

    try {
        // Buscamos el usuario en la base de datos
        const usuario = await Usuario.findById(id);

        // Verificamos si el usuario tiene suficientes créditos para realizar la compra
        if (usuario.creditos < total) {
            return res.status(400).json({ error: "El usuario no tiene suficientes créditos para realizar esta compra" });
        }

        // Creamos la factura en la base de datos
        const factura = await Factura.create({
            pelicula,
            sala,
            asientos,
            horario,
            total,
            usuario: id
        });

        // Descontamos los créditos del usuario
        usuario.creditos -= total;

        // Guardamos los cambios en la base de datos
        await usuario.save();

        // Agregamos la nueva factura al array de facturas del usuario
        await Usuario.findByIdAndUpdate(
            id,
            { $push: { facturas: factura._id } }
        );

        // Devolvemos la factura creada en la respuesta
        return res.json({ factura });
    } catch (error) {
        // Si hay un error, devolvemos un error 500 con el mensaje de error correspondiente
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
}

module.exports = {
    crearFactura,
};
