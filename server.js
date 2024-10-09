const express = require('express');
const connectMongoDB = require('./src/config/mondoDBConfig');
const cors = require('cors');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const basicRoutes = require('./src/routes/basicRoutes');

const app = express();
app.use(cors());
connectMongoDB();

app.use('/',basicRoutes);

app.listen(process.env.PORT,()=>{
    console.log(`Server connected to ${process.env.PORT}`);
})

