const { Router } = require('express');
const axios = require('axios');
const Dev = require('./models/Dev.js');

const routes = Router();

routes.post('/devs', async (req, res) => {
    //Vai recuperar os dados do usuario do git hub
    const { github_username, techs, latitude, longitude } = req.body;

    //Acessa a api do Github
    const apiRes = await axios.get(`https://api.github.com/users/${github_username}`);

    //Recebe os dados da api, se oo nome for vazio ele pega o valor do login
    const {name = login, avatar_url, bio} = apiRes.data;

    //Percorre o array de techs para retirar as virgulas e os espaços
    const techsArray = techs.split(',').map(tech => tech.trim());
    
    const location = {
        type: 'Point',
        coordinates: [longitude, latitude],
    };


    //Cra o OBJ dev
    const dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location,
    });

    return res.json(dev);
});


module.exports = routes;