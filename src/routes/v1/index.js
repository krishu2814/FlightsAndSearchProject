const express = require("express");
const CityController = require("../../controllers/city-controller");
const AirportController = require("../../controllers/airport-controller");
const FlightController = require('../../controllers/flight-controller');
const FlightMiddlewares = require('../../middlewares/index');
const UserController = require('../../controllers/user-controller');

const router = express.Router();
const airportController = new AirportController();

router.post('/city', CityController.create);
router.delete('/city/:id', CityController.destroy);
router.get('/city/:id', CityController.get);
router.get('/city', CityController.getAll); 
router.patch('/city/:id', CityController.update);

router.post('/airport', airportController.create);
router.delete('/airport/:id', airportController.destroy);
router.get('/airport/:id', airportController.get);
router.get('/airport', airportController.getAll);
router.patch('/airport/:id', airportController.update);

// Using middleware to validate flight
router.post(
    '/flight',
    FlightMiddlewares.validateCreateFlight,
    FlightController.create
);

router.get('/flight', FlightController.getAll);
router.get('/flight/:id', FlightController.get);
router.patch('/flight/:id', FlightController.update);

// User CRUD ->
router.get('/user/:id', UserController.get);
router.post('/user/signup', UserController.create);
router.delete('/user/:id', UserController.destroy);

module.exports = router;

