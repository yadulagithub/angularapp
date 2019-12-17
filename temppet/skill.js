const moongoose = require('mongoose');

const SkillSchema = moongoose.Schema({
    name: {
        type: String,
        required: [true, "Pet must have a name"],
        minlength: [2, "Must have 2 characters"]
               },
    
    skill1: {
        type: String,
        required: [true, "Pet must have a skill"],
        minlength: [5, "Must have 5 characters"]
        },       
    skill2: {
        type: String,
        minlength: [5, "Must have 5 characters"]
        },       
    skill3: {
            type: String,
            minlength: [5, "Must have 5 characters"]
        }       
        

}, {timestamps: true})

moongoose.model("Skill", SkillSchema);
module.exports = SkillSchema;