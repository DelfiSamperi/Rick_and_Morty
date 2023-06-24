// CREANDO UN SERVIDOR CON WEB SERVER
/*
const http = require('http'); //protocolo que maneja el server
const PORT = 3001;
const characters = require('./utils/data');

http.createServer((req,res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    //localhost:3001/rickandmorty/character/4
    // req.url: rickandmorty/character/4
    // split [rickandmorty, character, 4]
    if(req.url.includes('rickandmorty/character')) {
        console.log(req.url.split('/'));
        const id = req.url.split('/').at(-1);
        //OTRAS FORMAS DE TOMAR EL ID
        //const id = req.url.split('/').pop();
        // const id = req.url.split('/')[3];
        console.log(id);
        const character = characters.filter(char => char.id === Number(id));
        res.writeHead(200, {'content.type' : 'application-json'})
        .end(JSON.stringify(character[0]));
    }
}).listen(PORT, 'localhost');
*/

//CAMBIANDO EL CONDICIONAL DEL SERVER POR PROMESA (YA NO USO DATA PORQUE LLAMO A LA API EN getCharById
/*
const http = require('http'); //protocolo que maneja el server
const PORT = 3001;
const  {getCharById} = require('./controllers/getCharById');

http.createServer((req,res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if(req.url.includes('rickandmorty/character')) {
        const id = req.url.split('/').at(-1);
        getCharById(res, Number(id)); //parsear id de string a number (igual funciona)
    }
}).listen(PORT, 'localhost');
*/

// AHORA USANDO EXPRESS (lo instalo como dependencia)
/*
const express = require('express');
const express = require('express');
const PORT = 3001;

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

//pongo a escuchar al servidor
    server.listen(PORT, () => {
        console.log('Server raised in port: ' + PORT);
        //console.log(`Server raised in port: ${PORT}`);
     });
*/

//TEST modularizo en app.js
const server = require('./app');
const PORT = 3001;
//INSTANCIA DE SEQUELIZE
const { conn } = require('./DB_connection');

//pongo a escuchar al servidor
//SEQUELIZE
//force: true dropea la db y genera cambios
//si no quiero mas cambios pongo force:false
conn.sync({force: true})
.then(()=> {
    server.listen(PORT, () => {
        console.log('Server raised in port: ' + PORT);
        //console.log(`Server raised in port: ${PORT}`);
    });
});
    
  