const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const register = require('./routes/register');
const login = require('./routes/login');
const posts = require('./routes/post');
const users = require('./routes/user');

dotenv.config();

mongoose.connect(process.env.DB_URI)
.then(()=> console.log('DB connection successful'))
.catch((err)=> console.log('DB connection failed: ' + err.message));

app.use(express.json());
app.use(cors());

app.use("/api/register", register);
app.use("/api/login", login);
app.use("/api/posts", posts);
app.use("/api/users", users);

app.listen(process.env.port || 5000, 
    ()=> console.log(`Server started on port ${process.env.port}`));