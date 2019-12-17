console.log("pets.js is running");
const mongoose = require("mongoose");
const Pet = mongoose.model("Pet");
//const Skill = mongoose.model("Skill");

class PetController {

    getAll(req, res) {
        Pet.find({}).sort({"type": -1}).exec()
            .then(pets => res.json(pets))
            .catch(err => res.json(err));
    }

    create(req, res){
        console.log(req.body);
        let pet = new Pet(req.body);
        pet.save()
            .then(() => res.json({"msg": "ok"}))
            .catch(err => res.json(err));
    }

    getOne(req, res) {
        let _id = req.params._id;
        Pet.findOne({_id})
            .then(pet => res.json(pet))
            .catch(err => res.json(err));
    }

    update(req, res) {
        let _id = req.params._id;
        // req.body.hasRings = req.body.hasRings !== undefined;
        Pet.findByIdAndUpdate({_id}, req.body, {runValidators: true , context: 'query'})
            .then( () => res.json({"msg": "ok"}))
            .catch(err => res.json(err));
    }

    delete(req, res) {
        let _id = req.params._id;
        Pet.findByIdAndDelete({_id})
            .then( () => res.json({"msg": "ok"}))
            .catch(err => res.json(err));
    }

    // skill(req, res) {
    //     let _id = req.params._id;
    //     let skill = new Skill(req.body);
    //     Cake.findByIdAndUpdate({_id}, {$push: {skills: skill}}, {runValidators: true})
    //         .then(() => res.json({'msg': 'Should have a skill'}))
    //         .catch(err => res.json(err));
    // }

}

module.exports = new PetController();