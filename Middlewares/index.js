
const express = require('express');

const server=express();

server.use(express.json());

const vetor=["Pedro","Alves","Amorim"]


//Essa função global é executada toda vez que qualquer requisição é feita
server.use((req,res,next)=>{
    console.log("a req foi chamada")
    //Essa parte faz com que as outras funões sejam executadas
    return next();
})
//Essa função global diz qual método e a respectiva URL
server.use((req,res,next)=>{
  console.log(`Método: ${req.method}; URL${req.url}`)
  return next();
})
//http://localhost:3000/teste/0
//No terminal: Método: GET; URL/teste/0


//Essa função só será executada quando um middleware chamar
//Ela checa se existe o campo "nome" na requisição
function checkUserExists(req,res,next){
  if(!req.body.nome)
    return res.status(400).json({error:"não foi encontrado usuários no corpo da requisição"})
  return next();
}
//Essa função checa se existe um usuário no vetor
function checkUserInArray(req,res,next){
  const usuario=vetor[req.params.index]
  if(!usuario)
    return res.status(400).json({error:"Usuário não existe"})
  //É criado um novo atributo para o objeto global req
  req.usuario=usuario;
  return next();
}





//chamando a função checkUserInArray
//http://localhost:3000/teste/0
server.get('/teste/:id',checkUserInArray,(req,res)=>{
    

    return res.json(req.usuario);
})
/*
[
  "Pedro",

]
*/

//http://localhost:3000/teste/5
//chamando a função checkUserExists
server.post('/teste',checkUserExists,(req,res)=>{
    const {nome}=req.body;
    vetor.push(nome);
    return res.json(vetor);
})
/*
{
  "error": "Usuário não existe"
}
*/

//http://localhost:3000/teste/0
server.put('/teste/:index',checkUserExists,checkUserInArray,(req,res)=>{
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
server.delete('/teste/:index',checkUserInArray,(req,res)=>{
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