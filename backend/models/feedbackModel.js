const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    courseName: {
        type: String,
        required: true,
    },
    Duration: {
        type: String,
        default: "3 Months",
    },
    Comments: {
        type: String,
        required: true,
    },
    Rating: {
        type: Number,
        required: true,
    },
});


const Feedback = mongoose.model('Feedback', feedbackSchema);


module.exports = Feedback;
