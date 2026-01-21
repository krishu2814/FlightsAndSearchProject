
module.exports = {
    validateCreateFlight: require('./flight-middlewares').validateCreateFlight,
    AuthRequestValidators: require('./validate-user').validateUser
};
