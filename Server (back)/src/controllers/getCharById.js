const axios = require('axios');

const getCharById = (res,id) => {
axios.get(`https://rickandmortyapi.com/api/character/${id}`)
.then((response) => response.data)
.then((data) => { // ({name, gender, species, origin, image, status})
    const character = {     // const character = { 
        id : data.id,           //id,
        name: data.name,        //name,
        gender: data.gender,    //gender,
        species: data.species,  //species,
        origin: data.origin,    //origin,
        image: data.image,      //image,
        status: data.status     //status }
    }
    res
        .writeHead(200, {'Content-type':'aplication/json'})
        .end(JSON.stringify(character));
})
.catch((error) => {
    res
        .writeHead(500, {'Content-type':'text/plain'})
        .end(error.message)
})
};

module.exports = { getCharById };