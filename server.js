const express = require("express");
const winston = require('winston');
const { dirname } = require("path");
const cors = require("cors");
const path = require('path'); 
require("dotenv").config();

const app = express();
const port = process.env.PORT || '3000';

app.use(cors);
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.listen(port, ()=>{
    console.log('server running on port '+port);
}); 

const booksRouter = require('./routes/books');
app.use('/book',booksRouter);

const authorRouter = require('./routes/authors');
app.use('/author',authorRouter);

const userRouter = require('./routes/users');
const { request } = require("express");
app.use('/user',userRouter);


app.get("/", (req, res)=>{
    //res.send("Hello world")
    res.sendFile(path.join(__dirname,'/index.html'));
})
