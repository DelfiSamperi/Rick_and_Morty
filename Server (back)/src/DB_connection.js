require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
//Ej 5) importacion de modelos
const FavoriteModel = require('./models/Favorite');
const UserModel = require('./models/User');

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.
// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const sequelize = new Sequelize(
   // URL
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`,
   { logging: false, native: false }
);

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.
FavoriteModel(sequelize)
UserModel(sequelize)
//esto no funciona  /AHORA SI/ habia que hacer \c antes de empezar y levantar los dos servers

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
const { User, Favorite } = sequelize.models;
// User N:N Favorite
User.belongsToMany(Favorite, {through: 'user_favorite', /*timestamps: false */});
// Favorite N:N User
Favorite.belongsToMany(User, {through: 'user_favorite', /*timestamps: false */ });
// { timestamps : false } para que no salga en la table el createdAt y updatedAt


module.exports = {
   User,
   Favorite,
   conn: sequelize
};
//falta importar esto en el index.js
