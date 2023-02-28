const { model, Schema } = require("mongoose");

const FacturaSchema = new Schema({
    pelicula: { type: String, required: true },
    sala: { type: String, required: true },
    asientos: { type: String },
    horario: { type: String, required: true },
    fecha: { type: Date, default: Date.now },
    total: { type: Number, required: true },
});

module.exports = model("Factura", FacturaSchema);

