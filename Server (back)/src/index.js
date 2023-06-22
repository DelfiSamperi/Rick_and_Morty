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

