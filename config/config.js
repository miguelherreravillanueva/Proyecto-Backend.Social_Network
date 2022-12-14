const mongoose = require("mongoose");
require("dotenv").config();

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database succesfully connected");
    } catch (error) {
        console.error(error);
        throw new Error("Error while running database");
    }
};

module.exports = {
    dbConnection,
};