const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

//Import routes
const userRoute = require('./routes/user');

dotenv.config();

//Connect to DB
mongoose.connect(process.env.DB_CONNECT,
{ useNewUrlParser: true },
() => console.log('connected to DB!'));

//Middlewares
app.use(express.json());
//Routes middlewares
app.use('/user', userRoute);

app.listen(3000, () => console.log('Server up and running!!'));
