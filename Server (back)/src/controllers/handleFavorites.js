let myFavorites = [];

const postFav = (req, res) => {
    const {character} = req.body; //cuerpo del objeto traido de la API
    
    myFavorites.push(character);
    
    return res.status(200).json({myFavorites});
}

const deleteFav = (req, res) => {
    const {id} = req.params;
    
    myFavorites = myFavorites.filter(
        (fav)=> fav.id !== Number(id)
    );
    
    return res.status(200).json(myFavorites);
}

module.exports = {
    postFav,
    deleteFav
};