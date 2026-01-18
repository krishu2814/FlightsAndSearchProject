const { CityRepository } = require('../repository/index');

class CityService {
    constructor() {

        // 💥Object has methods✅
        // CityRepository is a class
        this.cityRepository = new CityRepository();
    }

    async createCity(data) {
        try {
            const city = await this.cityRepository.createCity(data);
            return city;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async deleteCity(cityId) {
        try {
            const response = await this.cityRepository.deleteCity(cityId);
            return response;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async updateCity(cityId, data) {
        try {
            const city = await this.cityRepository.updateCity(cityId, data);
            return city;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async getCity(cityId) {
        try {
            const city = await this.cityRepository.getCity(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async getAllCities(filter) {
        try {
            // user might send multiple filters
            const cities = await this.cityRepository.getAllCities({name: filter.name}); // filter
            return cities;
        } catch(error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }
}

module.exports = CityService;

/**
 * Responsibility: It acts as a middle man between the Controller (the outside world) and the Repository
 */