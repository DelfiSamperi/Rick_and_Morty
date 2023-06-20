let myFavorites = [];

const postFav = (req,res) => {
    const character = req.body;
    myFavorites.push(character);
    res.status(200).json(myFavorites);
}

const deleteFav = (req,res) => {
    const {id} = req.params;
    const filteredFavs = myFavorites.filter((fav)=> fav.id !== Number(id));
    res.status(200).json(filteredFavs);
}

module.exports = {
    postFav,
    deleteFav
};