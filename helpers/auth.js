const express = require('express');
const jwt = require('jsonwebtoken');


const verifyToken = function (req, res, next){
    const bearerHeader =  req.headers.authorization;
    if(!bearerHeader) res.json({
        'err': 401,
        'message':'access denied, token no found'
    });
    
    jwt.verify(bearerHeader, process.env.SECRET, (err, user)=>{
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

