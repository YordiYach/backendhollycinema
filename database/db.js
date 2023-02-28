const mongoose = require("mongoose");

const MONGO_URL = "mongodb+srv://yordiyachm:yordi123@cluster0.xd05exn.mongodb.net/?retryWrites=true&w=majority";

const db = async () => {
    await mongoose
        .connect(MONGO_URL)
        .then(() => console.log("DB FUNCIONANDO"))
        .catch((error) => console.error(error));
};

module.exports = db