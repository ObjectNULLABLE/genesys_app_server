const express = require('express')
var cors = require('cors')
const bodyParser = require('body-parser');
const routes = require('./app/routes');
const mongoose = require('mongoose');
const initRoles = require('./app/utils/initializeRoles');
require('dotenv').config();

mongoose
  .connect('mongodb://genesys-app:gegenesys@168.119.152.228:27017/data?authSource=admin', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false 
  })
  .then((mongoInst) => {
    console.log("Successfully connect to MongoDB.")

    initRoles()

    const app = express()

    app.use(cors())

    // app.options('*', cors())

    app.use(bodyParser.json())

    app.use("/api", routes) 

    app.listen(process.env.PORT || 3001, () => {
      console.log('Server started')
    })
  })
  .catch(err => {
    console.error("Connection error: ", err);
  });

 
 