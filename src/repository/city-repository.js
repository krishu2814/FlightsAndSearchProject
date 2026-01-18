const { City } = require('../models/index'); // MODELS
const { Op } = require('sequelize'); // operators for query

// contact to database
// sequelize documentation -> findByPk,update,create,delete ....

class CityRepository {

    async createCity({ name }) { 
        try {
            const city = await City.create({
                name: name,
                // name -> ES6
            });
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async deleteCity(cityId) {
        try {
            await City.destroy({

                // custom objects
                where: {
                    id: cityId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    // after update we need to save it.
    async updateCity(cityId, data) { // {name: "Prayagraj"} in body
        try {
            /**
             * Postgres
             */
            
            // const city = await City.update(data, {
            //     where: {
            //         id: cityId
            //     },
            //     returning: true,
            //     plain: true   
            // });

            /**
             * MySql
             */
            const city = await City.findByPk(cityId);
            // assign property
            city.name = data.name; // data -> req.body
            // save the updated data
            await city.save();
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async getCity(cityId) {
        try {
            const city = await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
    // filter can be empty also...
    // sensitive data only -> remove useless data earlier
    async getAllCities(filter) {
        try {
            if (filter.name) {
                const cities = await City.findAll({
                    where: {
                        name: {
                            [Op.startsWith]: filter.name // filter
                        }
                    }
                });
                return cities;
            }
            const cities = await City.findAll();
            return cities;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

}

module.exports = CityRepository;


/*

// routes -> middlware -> controllers -> serivce -> repository -> models

The Repository Layer (CityRepository) ->

The logic here is Database Centric.

Responsibility: Its only job is to talk to the database (via Sequelize).

Logic: It deals with database models, SQL queries, and raw data persistence.

Knowledge: It knows how to save a city to a table called Cities. It doesn't care why the city is being created or who is asking.

*/