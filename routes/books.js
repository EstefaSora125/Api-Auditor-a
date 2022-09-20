const express = require('express');
const router = express.Router();
const pool = require('../helpers/database');
const {PrismaClient} = require('@prisma/client');
const prisma =  new PrismaClient();
const auth = require('../helpers/auth');
//import {verifyToken} from '../helpers/auth';


router.get('/list',auth.verifyToken,async (req, res) =>{
    const book =  await prisma.books.findMany({
        where:{
            state: 'AC'
        }
    })
    res.json(book)
})

/*Obtener un libro*/

router.get('/', auth.verifyToken, async (req, res) =>{
    const book =  await prisma.books.findMany({
        where:{
            id_book: req.body.id_book
        }
    })
    res.json(book)
})

/* Crear libro */

router.post('/register', auth.verifyToken, async (req, res) =>{
    try{
        const {isbn, name, description, year, editorial,
            state, id_author, edition, page_number,
            colombian_pesos} = req.body
            const result =  await prisma.books.create({
                data: {
                    isbn, name, description, year, editorial,
                    state, id_author, edition, page_number,
                    colombian_pesos
                }
            })
            res.json("Nuevo libro registrado");
    }catch(err){        
        console.log(err)
    }    
})


/* Actualizar dato*/

router.put('/update', auth.verifyToken, async (req, res) =>{
    try{
        const {isbn, name, description, year, editorial,
            state, id_author, edition, page_number,
            colombian_pesos} = req.body
            const result =  await prisma.books.update({
                where: {id_book: req.body.id_book},
                data: {
                    isbn, name, description, year, editorial,
                    state, id_author, edition, page_number,
                    colombian_pesos
                }
            })
            res.json("Libro actualizado");
    }catch(err){        
        console.log(err)
    }    
})

/*Eliminar libro*/

router.patch('/delete', auth.verifyToken, async (req, res) =>{
    try{
        const result =  await prisma.books.update({
            where: {id_book: req.body.id_book},
            data: {
                state: 'DL'
            }
        })
        res.json("Libro eliminado");
    }catch(err){        
        console.log(err)
    }    
})


module.exports = router;