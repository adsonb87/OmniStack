const express = require('express');

const app = express();

//Usa o Json para todos os metodos do express
app.use(express.json());

//Metodos HTTP: GET, POST, PUT e DELETE

//Tipos de parâmetros:
//Query Params: req.query (Filtros, Ordenação, Paginação...)
//Route Params: req.params (Identificar um recurso na alteração ou remoção)
//Body: req.body (Dados para criação ou alteração de um registro)

//MongoDB (Não relacional)

//Enviando dados pelo GET
app.get('/users', (request,response) =>{
    console.log(request.query);
    return response.json({message: 'Hello World'});
});

//Enviando os parametros para exclusão e alteração.
app.delete('/users/delete/:id', (request,response) =>{
    console.log(request.params)
    return response.json({message: 'Hello World'});
});

//Enviando os parametros para criação ou alteração.
app.post('/users/cadastro', (request,response) =>{
    console.log(request.body)
    return response.json({message: 'Hello World'});
});

app.listen(3333);