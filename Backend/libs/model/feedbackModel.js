const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ["complaint", "suggestion", "compliment"],
        default: "complaint",
        required: true,
    },
    feedback: {
        type: String,
        required: true,
    },
    });