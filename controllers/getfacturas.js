const Usuario = require("../model/usuario");
const Factura = require("../model/factura");

const obtenerFacturasUsuario = async (req, res) => {
    try {
        // Buscamos al usuario autenticado por su ID
        const usuario = await Usuario.findById(req.user.id);

        if (!usuario) {
            return res.status(404).json({ mensaje: "Usuario no encontrado" });
        }

        // Utilizamos el método populate para obtener todas las facturas asociadas con el usuario
        const facturas = await Factura.find({ usuario: usuario._id }).populate(
            "usuario",
            "nombre apellido correo telefono"
        );

        res.json(facturas);
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: "Error al obtener facturas" });
    }
};

module.exports = obtenerFacturasUsuario;
