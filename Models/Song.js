var mongoose = require('mongoose');

var songSchema = new mongoose.Schema({
    name: String,
    singer: String
})

module.exports = mongoose.model("songs",songSchema)