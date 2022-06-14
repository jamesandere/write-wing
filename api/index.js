const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const posts = require('./routes/post')

dotenv.config();

mongoose.connect(process.env.DB_URI)
.then(()=> console.log('DB connection successful'))
.catch((err)=> console.log('DB connection failed: ' + err.message));

app.use(express.json());
app.use(cors());

app.use("/api/posts", posts);

app.listen(process.env.port || 5000, 
    ()=> console.log(`Server started on port ${process.env.port}`));