// TEST 
const express = require('express');
const server = express();

const router = require('./routes/indexRoutes');
const morgan = require('morgan');

//1° Middleware -> parsea la info del cliente a formato json
server.use(express.json());
//MORGAN -> middleware que imprime en consola las request que llegan
//server.use(morgan('dev'));

//2° Middleware -> permite el acceso
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
});

//3° Middleware -> dirige a las rutas que se usaran
server.use("/rickandmorty", router );

module.exports = server;