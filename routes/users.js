const express = require('express');
const router = express.Router();
const pool = require('../helpers/database');
const {PrismaClient} = require('@prisma/client');
const prisma =  new PrismaClient();
const jwt = require('jsonwebtoken');
const {verifyToken} = require('../helpers/auth');
const logger = require('../helpers/logger')

router.get('/list', verifyToken, async (req, res) =>{
    const users =  await prisma.users.findMany()
    res.json(users)
})

/*Obtener un autor*/

router.get('/', verifyToken, async (req, res) =>{
    const users =  await prisma.users.findMany({
        where:{
            username: req.body.username
        }
    })
    logger.info(`solicitud usuario ${req.body.username}`)
    res.json(users)
})

/* Crear user */

router.post('/register', async (req, res) =>{
    try{
        const {username, password } = req.body
            const result =  await prisma.users.create({
                data: {
                    username, password
                }
            })
            logger.info(`Registro exitoso nuevo usuario ${username}`)
            res.json("Nuevo usuario registrado");
    }catch(err){   
        logger.info(`Registro fallido nuevo usuario ${username} error: ${err}`)     
        console.log(err)
    }    
})

/* Actualizar dato*/

router.put('/update',verifyToken, async (req, res) =>{
    try{
        const {password} = req.body
            const result =  await prisma.users.update({
                where: {
                    username: req.body.username
                },
            })
            logger.info(`Actualizacion exitosa de contraseña de usuario  ${req.body.username}`)
            res.json("Contraseña de usuario actualizado");
    }catch(err){     
        logger.info(`Actualizacion fallida de contraseña de usuario  ${req.body.username} error: ${err}`)   
        console.log(err)
    }    
})

/*Eliminar Autor

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

//consultar un usuario*/
router.post('/auth', async (req, res) =>{
    try{
        console.log("validando usuario");
        const {username, password} = req.body
            const result =  await prisma.users.findMany({
                where: {
                    username: req.body.username,
                    password: req.body.password
                }
            })
            console.log(result)
            if (result== []) {
                logger.info(`Inicio sesion fallido por falta de datos  de usuario  ${req.body.username}`)
                res.json({
                    "err": 400,
                    "message": "datos incorrectos o usuario inexistente"
                })
            } else {
                logger.info(`Inicio sesion exitoso  de usuario  ${req.body.username}`)
                const accessToken = generateAccessToken(result[0]);
                res.header('authorization', accessToken).json({
                    message:'Usuario autenticado',
                    token: accessToken
                })
            }
    }catch(err){        
        console.log(err)
        logger.info(`Inicio sesion fallido de usuario  ${req.body.username} error: ${err}`)
        res.json({
            "err": 400,
            "message": "datos incorrectos o usuario inexistente"
        })
    }    
})

function generateAccessToken(user){
    return jwt.sign(
        user, process.env.SECRET)
}

module.exports = router;