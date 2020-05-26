const axios = require('axios');
const Dev = require('../models/Dev.js');
const parseStringAsArray = require ('../utils/parseStringAsArray.js');

module.exports ={
    async index(req,res){
        const { latitude, longitude, techs } = req.query;

        const techsArray = parseStringAsArray(techs);

        const devs = await Dev.find({
            //Pesquisar por mongo operators
            techs:{
                $in: techsArray, //vai verificar na coluna techs os campos que contém as techs passadas
            },
            location:{
                $near:{ //Função do mongo que retorna a proximidade da localidade no próprio banco
                    $geometry:{
                        type: 'Point',
                        coordinates:[longitude,latitude],
                    },
                    $maxDistance: 10000,
                },
            },
        });

        return res.json({ devs });
    }

};