const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require('./config/serverConfig');
const {CityRepository} = require("./repository/index")

const setupAndStartServer = async () => {

    // create the express object
    const app = express();

    // body parser
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    // start the server
    app.listen(PORT, async () => {
        console.log(`Server started at ${PORT}`);

        const repo = new CityRepository();
        // repo.createCity({ name: "New Delhi" });
        // repo.deleteCity(1);
    });
}

setupAndStartServer();

