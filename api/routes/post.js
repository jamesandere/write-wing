const router = require('express').Router();
const Post = require('../models/post');

router.put('/:id', async (req, res) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(
            req.params.id, {
                $set: req.body
            }, {new: true}
        );
        res.status(200).send(updatedPost);
    } catch (error) {
        res.status(500).send(error);
    }
});

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

router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).send(post);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/', async (req, res)=> {
    try {
        const posts = await Post.find();
        res.status(200).send(posts);
    } catch (error) {
        res.status(500).send(error);
    }
})

module.exports = router;