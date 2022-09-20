const express = require('express');
const jwt = require('jsonwebtoken');


const verifyToken = function (req, res, next){
    const bearerHeader =  req.headers.authorization;
    if(!bearerHeader) res.json({
        'err': 401,
        'message':'access denied, token no found'
    });
    const token = bearerHeader.split(" ");
    console.log(token)
    jwt.verify(token[1], process.env.SECRET, (err, user)=>{
        if(err){
            res.json({
                'err': 401,
                'message':'access denied, token expired or incorrect'
            });
        }else{
            next();
        }
    })
}

module.exports ={
    verifyToken
}

