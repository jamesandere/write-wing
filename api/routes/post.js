const router = require('express').Router();
const { auth, isAdmin } = require('../middleware/auth');
const cloudinary = require('../middleware/cloudinary');
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
    const {author, title, desc, body, image, categories} = req.body;

    try {
        if(image){
            const uploadRes = await cloudinary.uploader.upload(image, {
                upload_preset: "write-wing"
            })

            if(uploadRes){
                const newPost = new Post({
                    author: req.user._id,
                    title,
                    desc,
                    body,
                    image: uploadRes,
                    categories
                });
        
                const savedPost = await newPost.save();
                res.status(200).send(savedPost);
            }
        }
        
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id).populate("author");
        res.status(200).send(post);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/', async (req, res)=> {
    try {
        await Post.find().populate("author")
        .then(p=>res.send(p))
        .catch(error=>console.log(error));
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