const { Router } = require('express');
const DevController = require('./controllers/DevController.js');
const SearchController = require('./controllers/SearchController.js');

const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.get('/buscarDev', DevController.show);
routes.put('/editarDev', DevController.update);
routes.delete('/apagarDev', DevController.destroy);

routes.get('/search', SearchController.index);


module.exports = routes;