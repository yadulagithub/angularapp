const mongoose = require('mongoose');
const Party = mongoose.model("Party");
const Review = mongoose.model("Review");

class PartyController {

    getAll(req, res) {
        Party.find({})
            .then(parties => res.json(parties))
            .catch(err => res.json(err));
    }

    create(req, res) {
        const party = new Party(req.body);
        party.save()
            .then(() => res.json({'msg': 'Party is operational'}))
            .catch(err => res.json(err));
    }

    review(req, res) {
        let _id = req.params._id;
        let review = new Review(req.body);
        Party.findByIdAndUpdate({_id}, {$push: {reviews: review}}, {runValidators: true})
            .then(() => res.json({'msg': 'better have been 5 stars!'}))
            .catch(err => res.json(err));
    }

}

module.exports = new PartyController();