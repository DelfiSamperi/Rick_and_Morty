const {getCharById} = require('../controllers/getCharById');
const {login} = require('../controllers/login');
//const {postFav, deleteFav} = require('../controllers/handleFavorites');
const {deleteFav} = require('../controllers/deleteFav');
const {postFav} = require('../controllers/postFav');
const {postUser} = require('../controllers/postUser');

//const express = require('express');
//const router = express.Router();
//EN UNA SOLA LINEA
const router = require('express').Router();

//RUTAS
router.get("/character/:id", getCharById);

router.get("/login", login);

router.post("login", postUser);

router.post("/fav", postFav);

router.delete("/fav/:id", deleteFav);

//exportacion de rutas
module.exports =  router;