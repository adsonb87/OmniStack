const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes.js');

const app = express();

//Conecta com o banco de dados MongoDB
mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-czdnu.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//Usa o Json para todos os metodos do express/
app.use(express.json());
//Ativas as rotas novamente
app.use(routes);


app.listen(3333);