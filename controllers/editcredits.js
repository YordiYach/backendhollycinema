const User = require('../model/usuario');

const editcredits = async (req, res) => {
    const { userId } = req.params;
    const { credits } = req.body;

    try {
        const user = await User.findByIdAndUpdate(
            userId,
            { $inc: { creditos: credits } },
            { new: true }
        );

        if (!user) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }
        return res.status(200).json(user);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Error al actualizar los créditos del usuario" });
    }
};

module.exports = editcredits;