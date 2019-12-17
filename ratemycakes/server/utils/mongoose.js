const mongoose = require('mongoose');

module.exports = function(DB_NAME) {
    mongoose.connect(`mongodb://localhost/${DB_NAME}`);
    require('../models/cake');
}