//importando o express
const express = require('express');

const server=express();

//Tratando de uma requisição GET na rota /teste respondendo com um"Olá mundo"
server.get('/teste',(req,res)=>{
    return res.send('Olá Mundo');
})
//Tratando de uma requisição GET na rota /teste respondendo com um json
server.get('/teste2',(req,res)=>{
    return res.json({mensagem:'Olá Mundo'});
})

//Qual porta da aplicação
server.listen(3000);