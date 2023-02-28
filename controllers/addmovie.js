const Movie = require("../model/movie");

const addmovie = async (req, res) => {
    const { nombre, url, costo } = req.body;

    try {
        if (!nombre || !url || !costo) {
            return res.json({ mensaje: "Por favor llene todos los campos" });
        } else {
            const movie = await Movie.create({ nombre, url, costo }); // crear una nueva instancia del modelo de Película con los datos proporcionados
            res.status(201).json({ movie }); // enviar la respuesta con la película recién creada en formato JSON
        }
    } catch (error) {
        res.status(500).json({ error: error.message }); // enviar una respuesta de error si ocurre algún problema durante la creación de la película
    }
}

module.exports = addmovie;