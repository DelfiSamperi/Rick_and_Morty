const axios = require('axios');
/*
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
*/

//CREANDO CONTROLLER CON EXPRESS.JS
const URL = "https://rickandmortyapi.com/api/character/";
/*
const getCharById = (req,res) => {
    const { id } = req.params;
    axios.get(URL + id) //devuelve una promesa con caso de exito o error (contemplarlos)
    .then((response) => response.data)
    .then((data) => { //succes handler / fullfilled => value
        if(data) {
            let character = {     
                id : data.id,           
                name: data.name,        
                gender: data.gender,    
                species: data.species,  
                origin: data.origin,    
                image: data.image,      
                status: data.status     
            }
            //express no necesita content.type y eso, ya viene configurado
            return res.status(200).json(character)
        } else {
            return res.status(404).send('Not Found')
        }
    })
    .catch((error)=>res.status(500).send(error.message));    
}
*/

//ASYNC AWAIT
const getCharById = async (req, res) => {
    try {
        const { id } = req.params;
        const { data } = await axios.get(URL + id);
        const character = {
            id: data.id,
            status: data.status,
            name: data.name,
            species: data.species,
            origin: data.origin,
            image: data.image,
            gender: data.gender
        }
        return data.name
            ? res.status(200).json(character)
            : res.status(404).send("Not found")
    
        } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = { getCharById };