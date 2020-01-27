const axios = require('axios');
const Dev = require('../models/Dev.js');
const parseStringAsArray = require ('../utils/parseStringAsArray.js');

module.exports ={
    async index(req,res){
        const { latitude, longitude, techs } = req.query;

        const techsArray = parseStringAsArray(techs);

        console.log(techsArray);

        return res.json({ DEV: [] });
    }

};