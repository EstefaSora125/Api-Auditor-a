const express = require('express');
const router = express.Router();
const pool = require('../helpers/database');


router.get('/',(req,res)=>{
    const params = [Object.values(req.body), 'DL'];
    const sqlQuery = 'SELECT * FROM books WHERE id_book=? AND state != ?';
    pool.query(sqlQuery,params).then((rows) =>{
        res.status(200).json(rows);
    }).catch((err)=>{
        res.status(500).send(err.message);
    })
});


router.get('/list',(req,res)=>{
    const params = ['DL'];
    const sqlQuery = 'SELECT * FROM books WHERE state != ?';
    pool.query(sqlQuery,params).then((rows) =>{
        res.status(200).json(rows);
    }).catch((err)=>{
        res.status(500).send(err.message);
    })
});


router.post('/register', (req,res)=> {
    const params = Object.values(req.body);
    const sqlQuery = 'INSERT INTO books (isbn,name,description,year,editorial,state,id_author,edition,page_number,colombian_pesos) VALUES (?,?,?,?,?,?,?,?,?,?)';
    pool.query(sqlQuery, params).then((rows) =>{
        res.status(200).json({"status":"OK","description":"Libro agregado exitosamente"});
    }).catch((err)=>{
        res.status(500).send(err.message);
    })
})

router.put('/update', (req,res)=>{
    const author_params = Object.values(req.body);
    author_params.shift();
    author_params.push(req.body.id_book);
    const sqlQuery = 'UPDATE books SET description = ?,editorial=?,state=?,colombian_pesos = ? WHERE id_book= ?';
    pool.query(sqlQuery, author_params).then((rows) =>{
        res.status(200).json({"status":"OK","description":"Libro modificado exitosamente"});
    }).catch((err)=>{
        res.status(500).send(err.message);
    })
})

router.patch('/delete',(req,res)=>{
    const author_params = ['DL'];
    author_params.push(Object.values(req.body));
    const sqlQuery = 'UPDATE books SET state=? WHERE id_book = ?';
    pool.query(sqlQuery, author_params).then((rows) =>{
        res.status(200).json({"status":"OK","description":"Libro eliminado exitosamente"});
    }).catch((err)=>{
        res.status(500).send(err.message);
    })
});

module.exports = router;