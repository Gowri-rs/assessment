const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./db')
const feedbackRoutes = require('./routes/feedbackRoutes')
const feedbackModel = require("./models/feedbackModel")
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use("/feedback" , feedbackRoutes)
// app.use(feedbackModel)
db();

PORT= process.env.PORT || 4000;

app.listen(PORT, ()=>{
    console.log(`server running on http://localhost:${PORT}`)
})