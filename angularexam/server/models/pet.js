console.log("pet.js is running");

const mongoose = require("mongoose");
var uniqueValidator = require('mongoose-unique-validator');

//npm install --save mongoose-unique-validator
//const SkillSchema = require('./skill')

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Yuur pet must have a name!"],
        minlength: [2, "Pet name must 5 characters or more"],
        unique: [true, "Pet name must be unique"]
    },
    type: {
        type: String,
        minlength: [2, "Pet type must 3 characters or more"],
        required: [true, "Your Pet must have a type!"]
    },
    description: 
    {
        type: String,
        minlength: [2, "Pet color must 10 characters or more"],
        required: [true, "Your Pet must have a description!"]
    },
    skill1:
    {
        type: String,
        minlength: [2, "Pet skill must 10 characters or more"],
        required: [true, "Your Pet must have at least one skill"]
    },
    skill2:
    {
        type: String,
        minlength: [2, "Pet skill must 10 characters or more"],
   },
    skill3:
    {
        type: String,
        minlength: [2, "Pet skill must 10 characters or more"],
        
    },
    likes:
    {
        type: Number,
        default:0
           
    }
}, {timestamps: true}).plugin(uniqueValidator, { message: 'Error, expected {PATH} to be unique.' });


mongoose.model("Pet", PetSchema);

