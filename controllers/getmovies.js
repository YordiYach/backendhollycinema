const Movie = require('../model/movie');

const getmovies = async (req, res) => {
    try {
        const movies = await Movie.find(); // consultar todos los documentos de la colección
        res.json(movies); // enviar una respuesta con los documentos en formato JSON
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getmovies;