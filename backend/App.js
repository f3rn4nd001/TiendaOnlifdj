'use strict'
const express = require('express');
const morgan =require('morgan');
const app = express();

const {conecc} =require('./Database/Database');

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
//ROUTES
app.use('/api' ,require('./Routes/Routes'));


app.listen(app.get('port'),()=>{
  console.log("Start server on port "+app.get('port'))
})