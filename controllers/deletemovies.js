const Movie = require("../model/movie");

const deletemovies = async (req, res) => {
    try {
        const movie = await Movie.findByIdAndDelete(req.params.id); // Busca el documento por su ID y lo elimina de la colección
        if (!movie) {
            return res.status(404).send('Película no encontrada');
        }
        res.send(movie);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = deletemovies;