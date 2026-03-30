const mongoose = require("mongoose");
require('dotenv').config();

const db=async() =>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("MongoDB connected successfully")
    } catch (error) {
        console.log("MongoDB connection failed", error)
    }
}

module.exports = db;