import axios from 'axios';
/*
export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';
*/
//action solo con el front
/*
export const addFav = (character) => {
    return { type: ADD_FAV, payload: character } 
};
*/
//action con express
export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return (dispatch) => {
        axios.post(endpoint, character).then(({ data }) => {
            return dispatch({
                type: 'ADD_FAV',
                payload: data,
            });
        });
    };
};

// remove_fav solo front
/*
export const removeFav = (id) => {
    return { type: REMOVE_FAV, payload: id }
};
*/
// remove_fav con express server
export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return (dispatch) => {
        axios.delete(endpoint)
        .then(({ data }) => {
            return dispatch({
                type: 'REMOVE_FAV',
                payload: data,
            });
        });
    };
};

export const filterCards = (gender) => {
    return { type: 'FILTER', payload: gender }
};

export const orderCards = (order) => {
    return { type: 'ORDER', payload: order }
};