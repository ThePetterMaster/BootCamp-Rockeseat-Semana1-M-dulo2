//importando o express
const express = require('express');

const server=express();


// Query params = http://localhost:3000/teste?nome=Pedro


server.get('/teste',(req,res)=>{
    const nome = req.query.nome;
    return res.json({mensagem:`Olá ${nome}`});
})
/*
{
  "mensagem": "Olá Pedro"
} 
*/

// Route Params = http://localhost:3000/teste/5
server.get('/teste/:id',(req,res)=>{
    const id = req.params.id;
    // com desestruturação
    // const {id} = req.params;
    return res.json({mensagem:id});
})
/*
{
  "mensagem": "5"
} 
*/



server.listen(3000);
