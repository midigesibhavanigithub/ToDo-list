const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const app = express();
//use express.json() to get data into json format
app.use(express.json());
//Port
const PORT = process.env.PORT || 5500;

//lets import routes
const TodoItemRoute = require('./routes/todoItems')

// lets connect to mongodb..
mongoose.connect(process.env.DB_CONNECT)
 .catch(err => console.log(err))



app.use('/', TodoItemRoute);
//Add Port and connect to server
app.listen(PORT, ()=> console.log("server connected"));