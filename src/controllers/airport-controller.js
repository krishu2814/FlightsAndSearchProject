const { AirportService } = require('../services/index');

class AirportController {
    constructor() {
        this.airportService = new AirportService();

        // binding
        this.create = this.create.bind(this);
        this.destroy = this.destroy.bind(this);
        this.get = this.get.bind(this);
        this.getAll = this.getAll.bind(this);
        this.update = this.update.bind(this);
    }

    async create(req,res) {
        try {
            const airport = await this.airportService.createAirport(req.body);
            return res.status(201).json({
            data: airport,
            success: true,
            message: "Successfully created the airport.",
            err: {}
        })
        } catch (error) {
            console.log(error)
            return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create the airport.",
            err: error|| error.message
        })
        }
    }
    async destroy(req, res) {
        try {
            const deletedAirport = await this.airportService.deleteAirport(req.params.id);
            return res.status(200).json({
                data: deletedAirport,
                success: true,
                message: "Successfully deleted the airport.",
                err: {}
            })
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                data: {},
                success: false,
                message: "Not able to delete the airport.",
                err: error || error.message
            })
        }
    }
    async get(req,res) {
        try {
            const airport = await this.airportService.getAirport(req.params.id);
            return res.status(200).json({
                data: airport,
                success: true,
                message: "Successfully fetched the airport.",
                err: {}
            })
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                data: {},
                success: false,
                message: "Not able to fetch the airport.",
                err: error || error.message
            })
        }
    }
    async getAll(req,res) {
        try {
            const airports = await this.airportService.getAllAirport(req.query);
            return res.status(200).json({
                data: airports,
                success: true,
                message: "Successfully fetched all the airports.",
                err: {}
            })
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                data: {},
                success: false,
                message: "Not able to fetch all the airports.",
                err: error || error.message
            })
        }
    }
    async update(req,res) {
        try {
            const updatedAirport = await this.airportService.updateAirport(req.params.id, req.body);
            return res.status(200).json({
                data: updatedAirport,
                success: true,
                message: "Successfully updated the airport.",
                err: {}
            })
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                data: {},
                success: false,
                message: "Not able to update the airport.",
                err: error || error.message
            })
        }
    }
}

module.exports = AirportController;