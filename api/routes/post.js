const router = require('express').Router();
const Post = require('../models/post');

router.post('/', async (req, res) => {
    const {title, desc, body, image, categories} = req.body;

    try {
        const newPost = new Post({
            title,
            desc,
            body,
            image,
            categories
        });

        const savedPost = await newPost.save();
        res.status(200).send(savedPost);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;