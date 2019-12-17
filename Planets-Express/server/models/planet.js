console.log("planet.js is running");

const mongoose = require("mongoose");

const PlanetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "I am a custom error message!"],
        minlength: [2, "Planet name must 2 characters or more"]
    },
    color: {
        type: String,
        minlength: [2, "Planet color must 3 characters or more"],
        required: [true, "Your planet must have a color!"]
    },
    numMoons: {
        type: Number,
        min: [0, "Your planet is not allowd to have negative moons!"],
        default: 0
    },
    hasRings: {
        type: Boolean,
        required: true
    },
    facts: []
}, {timestamps: true});

mongoose.model("Planet", PlanetSchema);
