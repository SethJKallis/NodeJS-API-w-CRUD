const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const db = require("./app/models");
db.sequelize.sync({force: true}).then(() => {
    console.log("Drop and Re-sync db.")
});

let corsOptions = {
    origin: 'http://localhost:8080'
};

app.use(cors(corsOptions));

// parse requests of content-type -application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// simple routes
app.get('/', (req,res) => {
    res.json({
        message: "Welcome to This Application!"
    });
});

// set port, listen for requests
const port = process.env.port || 8080;
app.listen(port, function(){
    console.log("Server is Listening on port 3306...")
})