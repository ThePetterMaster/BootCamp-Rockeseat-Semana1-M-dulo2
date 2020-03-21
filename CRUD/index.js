
const express = require('express');

const server=express();

server.use(express.json());

const vetor=["Pedro","Alves","Amorim"]

// CRUD Create, Read, Update, Delete

server.get('/teste',(req,res)=>{
 
    return res.json(vetor);
})
/*
[
  "Pedro",
  "Alves",
  "Amorim"
]
*/


server.get('/teste/:id',(req,res)=>{
    const {id} = req.params;

    return res.json(vetor[id]);
})
/*
[
  "Pedro",
  "Alves",
  "Amorim"
]
*/

//http://localhost:3000/teste/0

server.post('/teste',(req,res)=>{
    const {nome}=req.body;
    vetor.push(nome);
    return res.json(vetor);
})
/*
[
  "Pedro"

]
*/

//http://localhost:3000/teste/0
server.put('/teste/:index',(req,res)=>{
    /*
    {
        "nome":"Neto",
    }
    */
    
    const {nome}=req.body;
    const {index}=req.params;
    vetor[index]=nome;

    res.json(vetor);
})

/*
[
  "Neto",
  "Alves",
  "Amorim"
]
*/

//http://localhost:3000/teste/0
server.delete('/teste/:index',(req,res)=>{
    const {index}=req.params;
    vetor.splice(index,1);
    res.json(vetor);
})
/*
[
  "Alves",
  "Amorim"
]
*/


server.listen(3000);