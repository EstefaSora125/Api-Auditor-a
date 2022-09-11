const express = require("express");
const { dirname } = require("path");
const path = require('path'); 
const mysql= require("mysql");
require("dotenv").config();

const {insert, read, update, remove, find} = require("./BooksDAO");

const app = express();
app.use(express.json());


const connection = mysql.createConnection({
     host: process.env.DBHOST,
     user: process.env.DBUSER,
     password: process.env.DBPASSWORD,
     database: process.env.DATABASE
})

connection.connect((err)=>{
    if(err) throw err;
    console.log("connected to dababase");
});

app.listen(3000, ()=>{
    console.log("server running on port 3000");
});

app.get("/", (req, res)=>{
    //res.send("Hello world")
    res.sendFile(path.join(__dirname,'/index.html'));
})

app.get("/students/insert", (req, res)=>{
    insert(connection, {id_student:202202, name:'juanes', rfid_code:''}, (result)=> {
        res.json(result);
    });
})

app.get("/students/update", (req, res)=>{
    update(connection, {id_student:202202,rfid_code:'2C BD 4B 18'}, (result)=> {
        res.json(result);
    });
})


app.get("/students/delete/:id", (req, res)=>{
    remove(connection, {id_student:req.params.id}, (result)=> {
        res.json(result);
    });
})


app.get("/students", (req, res)=>{
    read(
        connection, 
        (result)=> {
            res.json(result);
            console.log('LLego peticion al get');
    });
})

app.get("/students/isauthorized/:rfid_code", (req, res)=>{

    let aux_rfid_code = req.params.rfid_code;
    find(
        connection, 
        {rfid_code: aux_rfid_code},
        (result)=> {
            console.log(result);
            let student = result;
            if (student.length == 0) {
                res.send({'is_authorized': 'false'});
            }else{
                res.send({'is_authorized': 'true'});
            }
    });
})