const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    userId: {type: String, required: true},
    title: {type: String, required: true},
    desc: {type: String, required: true},
    body: {type: String, required: true},
    image: {type: String},
    categories: {type: Array}
}, {timestamps: true});

module.exports = mongoose.model('Post', postSchema);