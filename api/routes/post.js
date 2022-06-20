const router = require('express').Router();
const { auth, isAdmin } = require('../middleware/auth');
const Post = require('../models/post');
const  User  = require('../models/user');

router.put('/:id', isAdmin, async (req, res) => {
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

router.post('/', auth, async (req, res) => {
    const {userId, title, desc, body, image, categories} = req.body;

    try {
        // const user = await User.findById(req.user.id);
        // userId = req.user.id;
        const newPost = new Post({
            userId,
            title,
            desc,
            body,
            image,
            categories
        });
        // console.log(req.user);

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
});

router.delete('/:id', async (req, res)=> {
    try {
        await Post.findByIdAndDelete(req.params.id);
        res.status(200).send("Successfully deleted post");
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;