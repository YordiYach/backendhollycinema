const { model, Schema } = require("mongoose");


const UsuarioSchema = new Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    identificacion: { type: String, required: true, unique: true },
    correo: { type: String, required: true, unique: true },
    telefono: { type: String, required: true },
    creditos: { type: String, default: 300 },
    contraseña: { type: String, required: true }
});
module.exports = model("Usuario", UsuarioSchema);
