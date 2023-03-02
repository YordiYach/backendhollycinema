const Usuario = require("../model/usuario");

const agregarCreditos = async (req, res) => {
    try {
        // const { id } = req.user; // Obtenemos el id del usuario del token
        const { creditos, id } = req.body; // Obtenemos la cantidad de créditos a agregar desde el cuerpo de la petición

        const usuario = await Usuario.findById(id); // Buscamos al usuario por su id

        if (!usuario) {
            return res.status(404).json({ mensaje: "Usuario no encontrado" });
        }

        usuario.creditos += creditos; // Agregamos los créditos a la cuenta del usuario

        await usuario.save(); // Guardamos los cambios en la base de datos

        res.json({
            mensaje: `Se han agregado ${creditos} créditos a la cuenta de ${usuario.nombre}`,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: "Ha ocurrido un error al agregar los créditos" });
    }
};

module.exports = agregarCreditos;
