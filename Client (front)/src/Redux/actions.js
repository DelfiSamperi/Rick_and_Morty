export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';

//action solo con el front
export const addFav = (character) => {
    return { type: ADD_FAV, payload: character } 
};

// remove_fav solo front
export const removeFav = (id) => {
    return { type: REMOVE_FAV, payload: id }
};

export const filterCards = (gender) => {
    return { type: FILTER, payload: gender }
};

export const orderCards = (order) => {
    return { type: ORDER, payload: order }
};