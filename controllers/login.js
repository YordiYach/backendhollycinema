const bcrypt = require("bcrypt");
const Usuario = require("../model/usuario");
const jwt = require('jsonwebtoken')

const login = async (req, res) => {
  const { correo, contraseña } = req.body;

  Usuario.findOne({ correo }).then((usuario) => {
    if (!usuario) {
      return res.json({ mensaje: "Cuenta no encontrada" });
    }

    bcrypt.compare(contraseña, usuario.contraseña).then((esCorrecta) => {
      if (esCorrecta) {
        const { id, nombre, creditos } = usuario;

        const data = {
          id,
          nombre,
          creditos
        }

        const token = jwt.sign(data, 'secreto', {
          expiresIn: 86400
        })

        res.json({
          mensaje: "Usuario logeado correctamente",
          usuario: {
            id,
            nombre,
            creditos,
            token
          },
        });
      } else {
        return res.json({ mensaje: "Contraseña incorrecta" });
      }
    });
  });
};

module.exports = login;