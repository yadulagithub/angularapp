console.log("planets.js is running");
const mongoose = require("mongoose");
const Planet = mongoose.model("Planet");

class PlanetController {

    getAll(req, res) {
        Planet.find({})
            .then(planets => res.json(planets))
            .catch(err => res.json(err));
    }

    create(req, res){
        console.log(req.body);
        // only doing this because we have a checkbox...
        // seriously you don't need to do this if you don't
        req.body.hasRings = req.body.hasRings !== undefined;
        let planet = new Planet(req.body);
        planet.save()
            .then(() => res.json({"msg": "ok"}))
            .catch(err => res.json(err));
    }

    getOne(req, res) {
        let _id = req.params._id;
        Planet.findOne({_id})
            .then(planet => res.json(planet))
            .catch(err => res.json(err));
    }

    update(req, res) {
        let _id = req.params._id;
        // req.body.hasRings = req.body.hasRings !== undefined;
        Planet.findByIdAndUpdate({_id}, req.body, {runValidators: true})
            .then( () => res.json({"msg": "ok"}))
            .catch(err => res.json(err));
    }

    delete(req, res) {
        let _id = req.params._id;
        Planet.findByIdAndDelete({_id})
            .then( () => res.json({"msg": "ok"}))
            .catch(err => res.json(err));
    }

}

module.exports = new PlanetController();