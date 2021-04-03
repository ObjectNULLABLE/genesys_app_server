const express = require('express')
const bodyParser = require('body-parser');
const routes = require('./app/routes');
const mongoose = require('mongoose');
require('dotenv').config();

mongoose
  .connect('mongodb://168.119.152.228:27017/ru_data', {useNewUrlParser: true, useUnifiedTopology: true})
  .then(()=> {
    const app = express()

    app.use(bodyParser.json())

    app.use("/api", routes) 

    app.listen(process.env.PORT || 3001, () => {
      console.log('Server started')
    })
  });

 
 