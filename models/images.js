const mongoose = require('mongoose');

const imagesSchema = mongoose.Schema({
    image: String
});

const Image = mongoose.model('Image', imagesSchema);
module.exports = Image;