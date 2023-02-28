const { model, Schema } = require("mongoose");

const MovieSchema = new Schema({
    nombre: { type: String, required: true },
    url: { type: String, required: true },
    costo: { type: String, require: true },
    horario1: {type: String, default: "14:00" },
    horario2: {type: String, default: "17:00" },
    horario3: {type: String, default: "18:00" }
});

module.exports = model("Movie", MovieSchema);