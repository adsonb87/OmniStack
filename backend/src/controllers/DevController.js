const axios = require('axios');//Faz chamadas para outras api's
const Dev = require('../models/Dev.js');
const parseStringAsArray = require ('../utils/parseStringAsArray.js');

//Index, Show, Store, Update, Destroy
//Async - Significa que a função pode demorar a responder
//Await - Aguarda a chamada da API responder para continuar

module.exports = {
    async index(req,res){
        //Lista todos os DEVS
        const devs = await Dev.find();

        return res.json(devs);
    },

    async store(req, res){
        //Vai recuperar os dados do usuario do git hub
        const { github_username, techs, latitude, longitude } = req.body;
        
        let dev = await Dev.findOne({ github_username });

        if(!dev){
            //Acessa a api do Github
            const apiRes = await axios.get(`https://api.github.com/users/${github_username}`);
        
            //Recebe os dados da api, se o nome for vazio ele pega o valor do login
            const {name = login, avatar_url, bio} = apiRes.data;
        
            //Percorre o array de techs para retirar as virgulas e os espaços
            const techsArray = parseStringAsArray(techs);
            
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
        }      
    
        return res.json(dev); //aula 2
    },

    async show(req, res){
        const { github_username } = req.query;

        const dev = await Dev.find({ github_username });

        return res.json(dev);
    },

    async update(req,res){
        const { github_username, techs, latitude, longitude } = req.body;
        const techsArray = parseStringAsArray(techs);
        const location = {
            type: 'Point',
            coordinates: [longitude, latitude],
        };
        //const dev = await Dev.findOne({ github_username });

        const dev = await Dev.update({
            stock : {github_username},
            $set : {techs: techsArray,
                    location}
        });

        return res.json(dev);
    },

    async destroy(req,res){
        const {github_username} = req.query;

        const dev = await Dev.deleteOne({
            github_username: github_username
        });
        
        return res.json(dev);
    }

};