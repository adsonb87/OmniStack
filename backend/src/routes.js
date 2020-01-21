const { Router } = require('express');
const DevController = require('./controllers/DevController.js');

const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);


module.exports = routes;