const { AirportRepository } = require('../repository/index');

class AirportService {
    constructor() {
        // object has methods
        this.airportRepository = new AirportRepository();
    }

    async createAirport(data) {
        try {
            const airport = this.airportRepository.createAirport(data);
            return airport;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }
    async deleteAirport(airportId) {
        try {
            const airport = this.airportRepository.deleteAirport(airportId);
            return airport;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }
    async getAirport(airportId) {
        try {
            const airport = this.airportRepository.getAirport(airportId);
            return airport;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }
    async getAllAirport(filter) {
        try {
            const airport = this.airportRepository.getAllAirport({name: filter.name});
            return airport;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }
    async updateAirport(airportId,data) {
        try {
            const airport = this.airportRepository.updateAirport(airportId,data);
            return airport;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }
}

module.exports = AirportService;

/**
 * super(airportRepository) injects the repository into the parent class, 
 * so this.repository in CrudService refers to AirportRepository.
 * 
 * Execution flow ->

 → airportService.create()
    → CrudService.create()
        → this.repository.create()
            → airportRepository.create()
                → Airport.create() (Sequelize model)
 */