const UserRepository = require('../repository/user-repository');
const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = require('../config/serverConfig');
const bcrypt = require('bcrypt');

class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async create(data) {
        try {
            const user = await this.userRepository.create(data);
            console.log(user.password);
            return user;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error;
        }
    }

    async destroy(data) {
        try {
            const user = await this.userRepository.destroy(data);
            return user;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error;
        }
    }

    async getUserById(userId) {
        try {
            const user = await this.userRepository.getUserById(userId);
            return user;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error;
        }
    }

    createToken(user) {
        try {
            const token = jwt.sign(user.id, JWT_SECRET_KEY, { expiresIn: '1d'});
            return token;
        } catch (error) {
            console.log("Something went wrong in token creation");
            throw error;
        }
    }

    verifyToken(token) {
        try {
            const response = jwt.verify(token, JWT_SECRET_KEY);
            return response;
        } catch (error) {
            console.log("Something went wrong in token validation", error);
            throw error;
        }
    }

    async checkPassword(plainPassword, userSavedPassword) {
        try {
            return bcrypt.compareSync(plainPassword, userSavedPassword);
        } catch (error) {
            console.log("Something went wrong in token validation", error);
            throw error;
        }
        
    }
}

module.exports = UserService;