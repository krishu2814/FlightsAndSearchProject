const { CityService } = require('../services/index') 

/**
 * In JavaScript: 
                  1). ClassName.method() ❌ (unless method is static)
                  2). object.method() ✅
 * POST
 * data -> req.body
 * next -> undefined for controllers
 * use static keyword -> Method now belongs to the class✅ itself ...
 */

// We need to create an object to call any method
// We cannot use class directly ..
const cityService = new CityService();


// POST -> {"name":"patna"} in req.body
const create = async (req, res) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: "Successfully created the city.",
            err: {}
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create the city.",
            err: error|| error.message
        })
    }
};
 
// DELETE -> /city/:id
const destroy = async (req, res) => {
    try {
        const deletedCity = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data: deletedCity,
            success: true,
            message: "Successfully deleted the city.",
            err: {}
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to deleted the city.",
            err: error || error.message
        })
    }
};
 
// GET -> /city/:id
const get = async (req, res) => { 
    try {
        const getCity = await cityService.getCity(req.params.id);
        return res.status(201).json({
            data: getCity,
            success: true,
            message: "Successfully fetch a city.",
            err: {}
        })
    } catch (error) {
        res.status(500).json({
            data: {},
            success: false,
            message: "Not able to fetch a city.",
            err: error || error.message
        })
    }
};

// PATCH -> /city/:id
// parameters to be updated -> in req.body
const update = async (req, res) => {
    try {
        const updatedCity = await cityService.updateCity(req.params.id , req.body);
        // await updatedCity.save();
        return res.status(201).json({
            data: updatedCity,
            success: true,
            message: "Successfully updated a city.",
            err: {}
        })
    } catch (error) {
        res.status(500).json({
            data: {},
            success: false,
            message: "Not able to update a city.",
            err: error || error.message
        })
    }
};
 
const getAll = async (req, res) => {
    try {
        const cities = await cityService.getAllCities(req.query); // req.query -> filter query
        return res.status(200).json({
            data: cities,
            success: true,
            message: "Successfully fetched all cities.",
            err: {}
        })
    } catch (error) {
        res.status(500).json({
            data: {},
            success: false,
            message: "Not able to get all cities.",
            err: error || error.message
        })
    }
};
 

module.exports = {
    create,
    destroy,
    get,
    update,
    getAll
};
