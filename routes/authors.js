const express = require('express');
const router = express.Router();
const pool = require('../helpers/database');


router.get('/',(req,res)=>{
    const params = [Object.values(req.body), 'DL'];
    const sqlQuery = 'SELECT * FROM authors WHERE id_author=? AND state != ?';
    console.log(params);
    pool.query(sqlQuery,params).then((rows) =>{
        res.status(200).json(rows);
    }).catch((err)=>{
        res.status(500).send(err.message);
    })
});

router.get('/list',(req,res)=>{
    const params = ['DL'];
    const sqlQuery = 'SELECT * FROM authors WHERE state != ?';
    pool.query(sqlQuery,params).then((rows) =>{
        res.status(200).json(rows);
    }).catch((err)=>{
        res.status(500).send(err.message);
    })
});

router.post('/register', (req,res)=> {
    const author_params = Object.values(req.body);
    console.log(author_params);
    const sqlQuery = 'INSERT INTO authors (name,email,phone_number,state) VALUES (?,?,?,?)';
    pool.query(sqlQuery, author_params).then((rows) =>{
        res.status(200).json("Author Agregado exitosamente");
    }).catch((err)=>{
        res.status(500).send(err.message);
    })
})

router.put('/update', (req,res)=>{
    const author_params = Object.values(req.body);
    author_params.shift();
    author_params.push(req.body.id_author);
    const sqlQuery = 'UPDATE authors SET name =?,email=?,phone_number=?,state=? WHERE id_author= ?';
    pool.query(sqlQuery, author_params).then((rows) =>{
        res.status(200).json("Author modificado exitosamente");
    }).catch((err)=>{
        res.status(500).send(err.message);
    })
})

router.patch('/delete',(req,res)=>{
    const author_params = ['DL'];
    author_params.push(Object.values(req.body));
    const sqlQuery = 'UPDATE authors SET state=? WHERE id_author = ?';
    pool.query(sqlQuery, req.params.id).then((rows) =>{
        res.status(200).json("Author Agregado exitosamente");
    }).catch((err)=>{
        res.status(500).send(err.message);
    })
});

module.exports = router;