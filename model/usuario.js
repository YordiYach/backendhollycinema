const { model, Schema } = require("mongoose");


const UsuarioSchema = new Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    identificacion: { type: String, required: true, unique: true },
    correo: { type: String, required: true, unique: true },
    telefono: { type: String, required: true },
    creditos: { type: Number, default: 300 },
    contraseña: { type: String, required: true },
    facturas:[{type: Schema.Types.ObjectId, ref: "Factura", required: true }]
});
module.exports = model("Usuario", UsuarioSchema);
