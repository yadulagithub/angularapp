const mongoose = require('mongoose');
const ReviewSchema = require('./review')

const CakeSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Cake must have a name"],
        minlength: [2, "Must have 2 characters"]
               },
    baker: {
            type: String,
            required: [true, "Cake must have a baker"],
            minlength: [2, "Must have 2 characters"]
            },       
    image:    {
        type: String
            },
    reviews: []


    

}, {timestamps: true})

mongoose.model("Cake", CakeSchema)