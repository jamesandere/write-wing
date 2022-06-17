const Joi = require('joi');
const bcrypt = require("bcrypt");
const genAuthToken = require('../middleware/genAuthToken');
const User = require('../models/user');
const router = require('express').Router();

router.post('/', async (req, res) => {
    const schema = Joi.object({
        email: Joi.string().min(3).max(200).required().email(),
        password: Joi.string().min(5).max(200).required(),
    });

    const { error } = schema.validate(req.body);

    if(error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: req.body.email });

    if(!user) return res.status(400).send("User doesn't exist!");

    const validPassword = await bcrypt.compare(req.body.password, user.password);

    if(!validPassword) return res.status(401).send("Invalid password");

    const token = genAuthToken(user);

    res.status(200).send(token);
});

module.exports = router;