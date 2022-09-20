const express = require('express');
const router = express.Router();
const pool = require('../helpers/database');
const {PrismaClient} = require('@prisma/client');
const prisma =  new PrismaClient();
const {verifyToken} = require('../helpers/auth');

router.get('/list', verifyToken, async (req, res) =>{
    const author =  await prisma.authors.findMany({
        where:{
            state: 'AC'
        }
    })
    res.json(author)
})

/*Obtener un autor*/

router.get('/', verifyToken, async (req, res) =>{
    const author =  await prisma.authors.findMany({
        where:{
            id_author: req.body.id_author
        }
    })
    console.log(author);
    res.json(author)
})

/* Crear Autor */

router.post('/register', verifyToken, async (req, res) =>{
    try{
        const {name, email ,phone_number ,state} = req.body
            const result =  await prisma.authors.create({
                data: {
                    name ,email ,phone_number ,state
                }
            })
            res.json("Nuevo autor registrado");
    }catch(err){        
        console.log(err)
    }    
})

/* Actualizar dato*/

router.put('/update',verifyToken, async (req, res) =>{
    try{
        const {name, email ,phone_number ,state} = req.body
            const result =  await prisma.authors.update({
                where: {id_author: req.body.id_author},
                data: {
                    name, email ,phone_number ,state
                }
            })
            res.json("Autor actualizado");
    }catch(err){        
        console.log(err)
    }    
})

/*Eliminar Autor*/

router.patch('/delete', verifyToken, async (req, res) =>{
    try{
        const result =  await prisma.authors.update({
            where: {id_author: req.body.id_author},
            data: {
                state: 'DL'
            }
        })
        res.json("Autor eliminado");
    }catch(err){        
        console.log(err)
    }    
})


module.exports = router;