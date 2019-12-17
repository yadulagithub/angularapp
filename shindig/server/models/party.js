const mongoose = require('mongoose');
const ReviewSchema = require('./review')

const PartySchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Party must have a name"],
        minlength: [2, "Must have 2 characters"]
        },
    host: {
            type: String,
            required: [true, "Party host must have a baker"],
            minlength: [2, "Must have 2 characters"]
        },
                
    when: {
                    type: Date,
                    required: [true, "Party must have a when"],
                    minlength: [2, "Must have 2 characters"]
         },
    where: {
            type: String,
            required: [true, "Part must have a where"],
            minlength: [2, "Must have 2 characters"]
            },
    theme: {
        type: String,
        required: [true, "Party Description must have a theme"],
        minlength: [2, "Must have 2 characters"]
        }

}, {timestamps: true})

mongoose.model("Party", Party)