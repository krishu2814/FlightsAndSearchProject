const AirplaneRepository = require('./airplane-repository');

// for multiple named exports in one require statement ...😎
module.exports = {
    CityRepository: require('./city-repository'),
    AirportRepository: require('./airport-repository'),
    FlightRepository: require('./flight-repository'),
    AirplaneRepository,
}