const mongoose = require('mongoose');
const Cake = mongoose.model("Cake");
const Review = mongoose.model("Review");

class CakeController {

    getAll(req, res) {
        Cake.find({})
            .then(cakes => res.json(cakes))
            .catch(err => res.json(err));
    }

    create(req, res) {
        const cake = new Cake(req.body);
        cake.save()
            .then(() => res.json({'msg': 'cake is operational'}))
            .catch(err => res.json(err));
    }

    review(req, res) {
        let _id = req.params._id;
        let review = new Review(req.body);
        Cake.findByIdAndUpdate({_id}, {$push: {reviews: review}}, {runValidators: true})
            .then(() => res.json({'msg': 'better have been 5 stars!'}))
            .catch(err => res.json(err));
    }

}

module.exports = new CakeController();