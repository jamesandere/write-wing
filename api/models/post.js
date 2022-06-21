const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    userId: {type: String},
    title: {type: String, required: true},
    desc: {type: String, required: true},
    body: {type: String, required: true},
    image: {type: Object, required: true},
    categories: {type: Array}
}, {timestamps: true});

module.exports = mongoose.model('Post', postSchema);