const { Airport } = require('../models/index');
const { Op } = require('sequelize');

class AirportRepository {
    
    async createAirport(data) {
        try {
            const airport = await Airport.create({
                name: data.name,
                cityId: data.cityId
            });
            return airport;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
     async deleteAirport(airportId) {
        try {
            const deletedAirport = await Airport.destroy({
                where: {
                    id: airportId,
                }
            });
            return deletedAirport;
            
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
     }
     async updateAirport(airportId, data) {
        try {
            const airport = await Airport.findByPk(airportId);
            airport.name = data.name; // data in req.body
            await airport.save();
            return airport;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
     }
     async getAirport(airportId) {
        try {
            const airport = await Airport.findByPk(airportId);
            return airport;         
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
     }
     async getAllAirport() {
        try {
            const airports = await Airport.findAll();
            return airports;
            
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
}

module.exports = AirportRepository;