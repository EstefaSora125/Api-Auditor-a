const express = require('express');
const router = express.Router();
const pool = require('../helpers/database');

router.get('/:id',(req,res)=>{
    const params = [req.params.id];
    const sqlQuery = 'SELECT * FROM books WHERE id_book=?';
    pool.query(sqlQuery,params).then((rows) =>{
        res.status(200).json(rows);
    }).catch((err)=>{
        res.status(500).send(err.message);
    })
});

router.get('/',(req,res)=>{
    const sqlQuery = 'SELECT * FROM books';
    console.log("tamos llegando");
    pool.query(sqlQuery, (err, rows, fields) =>{
        if(err){
            res.status(500).send(error.message)
        }
        res.status(200).json(rows);
    })
});
router.get('/', async function(req,res){
    try {
        const sqlQuery = 'SELECT * FROM books';
        const rows = await pool.query(sqlQuery);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
    res.status(200).json({id:req.params.id})
});

router.post('/register', async function(req,res) {
    try {
        const book_params = req.body;
        const sqlQuery = 'INSERT INTO books (isbn,name,description,year,editorial,id_autor,edition,page_number,colombian_pesos) VALUES (?,?,?,?,?,?,?,?,?)';
        const result = await pool.query(sqlQuery, book_params);

        res.status(200).json(result);
    } catch (error) {
        res.status(400).send(error.message)
    }
})

router.patch('/update/:id', async function(req,res) {
    try {
        const book_params = req.body;
        const sqlQuery = 'UPDATE books SET description = ?,colombian_pesos = ? WHERE id_book= ?';
        const result = await pool.query(sqlQuery, book_params,req.params.id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).send(error.message)
    }
})

router.delete('/:id', async function(req,res){
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