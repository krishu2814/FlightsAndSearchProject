const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require('./config/serverConfig');
const ApiRoutes = require('./routes/index');
const db = require('./models/index');
// const { City, Airport } = require('./models/index');

const setupAndStartServer = async () => {

    // create the express object
    const app = express();

    // body parser
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use('/api', ApiRoutes); // -> /api/v1 -> go to v1 folder in routes folder


    // start the server
    app.listen(PORT, async () => {
        console.log(`Server started at ${PORT}`);
        if (process.env.SYNC_DB) {
            db.sequelize.sync({ alter: true }); // sync
        }
    });
}

setupAndStartServer();

