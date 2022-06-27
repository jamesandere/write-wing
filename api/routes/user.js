const router = require('express').Router();
const { auth, isAdmin } = require('../middleware/auth');
const User  = require('../models/user');
const bcrypt = require('bcrypt');

router.put("/:id", auth, async (req, res) => {
    if(req.body.password){
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
    }

    try {
        const updUser = await User.findByIdAndUpdate(
            req.params.id, {
                $set : req.body
            }, { new: true }
        );

        res.status(200).send(updUser);
    } catch (error) {
        res.status(200).send(error);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).send("Successfully deleted user");
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get("/:id", auth, async (req, res) => {
    try {
       const user = await User.findById(req.params.id);
       res.status(200).send(user); 
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/', isAdmin, async (req, res) => {
    let qNew = req.query.new;
    try {
        const users = qNew ? await User.find().sort({_id: -1})
        : await User.find();
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;