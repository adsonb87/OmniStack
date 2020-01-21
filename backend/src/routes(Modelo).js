const { Router } = require('express');

const routes = Router();

//Metodos HTTP: GET, POST, PUT e DELETE

//Tipos de parâmetros:
//Query Params: req.query (Filtros, Ordenação, Paginação...)
//Route Params: req.params (Identificar um recurso na alteração ou remoção)
//Body: req.body (Dados para criação ou alteração de um registro)

//MongoDB (Não relacional)

//Enviando dados pelo GET
routes.get('/users', (request,response) =>{
    console.log(request.query);
    return response.json({message: 'Hello World'});
});

//Enviando os parametros para exclusão e alteração.
routes.delete('/users/delete/:id', (request,response) =>{
    console.log(request.params)
    return response.json({message: 'Hello World'});
});

//Enviando os parametros para criação ou alteração.
routes.post('/users/cadastro', (request,response) =>{
    console.log(request.body)
    return response.json({message: 'Hello World'});
});

module.exports = routes;