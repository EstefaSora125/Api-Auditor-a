const express = require('express');
const router = express.Router();
const pool = require('../helpers/database');


router.get('/:id',(req,res)=>{
    const params = [req.params.id];
    const sqlQuery = 'SELECT * FROM authors WHERE id_author=?';
    pool.query(sqlQuery,params).then((rows) =>{
        res.status(200).json(rows);
    }).catch((err)=>{
        res.status(500).send(err.message);
    })
});

router.get('/',(req,res)=>{
    const sqlQuery = 'SELECT * FROM authors';
    pool.query(sqlQuery).then((rows) =>{
        res.status(200).json(rows);
        console.log(rows);
    }).catch((err)=>{
        res.status(500).send(err.message);
    })
});

router.post('/register', (req,res)=> {
    const author_params = Object.values(req.body);
    console.log(author_params);
    const sqlQuery = 'INSERT INTO authors (name,email,phone_number) VALUES (?,?,?)';
    pool.query(sqlQuery, author_params).then((rows) =>{
        res.status(200).json("Author Agregado exitosamente");
    }).catch((err)=>{
        res.status(500).send(err.message);
    })
})

router.put('/update', async function(req,res) {
    try {
        const author_params = Object.values(req.body);
        author_params.shift()
        author_params.push(req.body.id_author);
        const sqlQuery = 'UPDATE authors SET name =?,email=?,phone_number=? WHERE id_author= ?';
        const result = await pool.query(sqlQuery, author_params);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).send(error.message)
    }
})

router.patch('/:id', async function(req,res){
    try {
        const sqlQuery = 'DELETE FROM books WHERE id_book=?';
        const rows = await pool.query(sqlQuery, req.params.id);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
    res.status(200).json({id:req.params.id})
});

module.exports = router;