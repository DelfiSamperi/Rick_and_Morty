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
        const id = req.url.split('/').pop();
        // const id = req.url.split('/')[3];
        // const id = req.url.split('/').at(-1);
        console.log(id);
        const character = characters.filter(char => char.id === Number(id));
        res.writeHead(200, {'content.type' : 'application-json'})
        .end(JSON.stringify(character[0]));
    }
}).listen(PORT, 'localhost');
