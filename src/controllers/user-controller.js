const { UserService } = require('../services/index');

class UserController {
    constructor() {
        this.userService = new UserService();

        // binding
        this.create = this.create.bind(this);
        this.destroy = this.destroy.bind(this);
        this.get = this.get.bind(this);
        this.signIn = this.signIn.bind(this);
    }

    async signIn(req, res) {
        try {
            const user = await this.userService.signIn(req.body.email, req.body.password);
            return res.status(200).json({
                success: true,
                message: 'Successfully sign in the user.',
                token: user,
                err: {}
            });
        } catch (error) {
            return res.status(404).json({
                message: 'Not able to sign in user.',
                data: {},
                success: false,
                err: error
            });
        }
    }

    async create(req, res) {
        try {
            const response = await this.userService.create({
                email: req.body.email,
                password: req.body.password
            });
            return res.status(201).json({
                success: true,
                message: 'Successfully created a new user',
                data: response,
                err: {}
            });
        } catch (error) {
            return res.status(500).json({
                message: 'Not able to create user.',
                data: {},
                success: false,
                err: error
            });
        }
    }

    async destroy(req, res) {
        try {
            const user = await this.userService.destroy(req.params.id);
            res.status(200).json({
                success: true,
                message: 'Successfully deleted the user',
                data: user,
                err: {}
            })
        } catch (error) {
            console.log(error);
            return res.status(404).json({
                message: 'Not able to delete user.',
                data: {},
                success: false,
                err: error
            });
        }
    }

    async get(req, res) {
        try {
            const user = await this.userService.getUserById(req.params.id); 
            console.log(user);
            res.status(200).json({
                success: true,
                message: 'Successfully fetched the user',
                data: user,
                err: {}
            })
        } catch (error) {
            console.log(error);
            return res.status(404).json({
                message: 'Not able to fetch user.',
                data: {},
                success: false,
                err: error
            });
        }
    }
}

module.exports = new UserController();