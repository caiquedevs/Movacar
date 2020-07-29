const express = require('express');
const loginController = require('../controllers/loginController');
const driverController = require('../controllers/driverController');
const travelController = require('../controllers/travelController');
const tokenController = require('../controllers/tokenController');

const loginRequired = require('../middlewares/loginRequired');

const routes = express.Router();

routes.get('/', (req, res) => {
  res.json({ msg: 'BEM VINDO A API DA MOVACAR' });
});

// Tokens
routes.post('/tokens', tokenController.store);

// Login
routes.get('/index', loginController.index);
routes.post('/forgot', loginController.forgot);
routes.post('/login', loginController.create);
routes.delete('/login/:id_login', loginController.delete);

// Drivers
routes.get('/drivers', loginRequired.verify, driverController.index);
routes.get('/drivers/:id_driver', loginRequired.verify, driverController.show);
routes.get('/drivers/travels/:id_driver', loginRequired.verify, driverController.indexTravels);
routes.post('/drivers', loginRequired.verify, driverController.create);
routes.delete('/drivers/:id_driver', loginRequired.verify, driverController.delete);
routes.put('/drivers/:id_driver', loginRequired.verify, driverController.put);

// Travels
routes.get('/travels', loginRequired.verify, travelController.index);
routes.post('/travels', loginRequired.verify, travelController.create);
routes.put('/travels/:id_travel', loginRequired.verify, travelController.put);
routes.delete('/travels/:id_travel', loginRequired.verify, travelController.delete);

module.exports = routes;
