const moongoose = require('mongoose');

const ReviewSchema = moongoose.Schema({
    name: {
        type: String,
        required: [true, "Cake must have a name"],
        minlength: [2, "Must have 2 characters"]
               },
    rating:  {
            type: Number,
            required: [true, "Cake must have ratings"],
            },
    
    comment: {
        type: String,
        required: [true, "Cake must have a reviews"],
        minlength: [2, "Must have 10 characters"]
        }       

}, {timestamps: true})

moongoose.model("Review", ReviewSchema);
module.exports = ReviewSchema;
