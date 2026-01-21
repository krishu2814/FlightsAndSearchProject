const UserRepository = require('../repository/user-repository');
const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = require('../config/serverConfig');
const bcrypt = require('bcrypt');

class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    // sign in the user
    async signIn(email , passwordByUser) {
        try {
            // find user by email
            const user = await this.userRepository.findUserByEmail(email);
            console.log(user);
            if (!user) {
                throw { error: "User not found." };
            }

            // compare incoming password
            // user.password -> saved in database
            const validUser = await this.checkPassword(passwordByUser, user.password);
            if (!validUser) {
                throw {error : "Incorrect password."}
            }
            //create token and send it to user
            const token = this.createToken({ email: user.email, id: user.id });
            console.log(token);
            return token;
        } catch (error) {
            console.log("Something went wrong in the sign in process");
            throw { error };
        }

    }

    async create(data) {
        try {
            const user = await this.userRepository.create(data);
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
            const token = jwt.sign(user, JWT_SECRET_KEY, { expiresIn: 8000000 });
            return token;         
        } catch (error) {
            console.log("Something went wrong in token creation", error);
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

    async checkPassword(plainPassword, userSavedPasswordDB) {
        try {
            return await bcrypt.compare(plainPassword, userSavedPasswordDB);
        } catch (error) {
            console.log("Something went wrong in token validation", error);
            throw error;
        }
        
    }
}

module.exports = UserService;