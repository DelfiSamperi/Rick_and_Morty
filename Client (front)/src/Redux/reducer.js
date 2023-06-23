import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions";

const initialState = {
    myFavorites: [],
    allFavChars: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        //add_fav solo front 
        /*
        case ADD_FAV:
            return {
                ...state,
                myFavorites: action.payload,
                allFavChars: action.payload
            }
            */
        //addFav desde el back
        case ADD_FAV:
            return {
                ...state,
                myFavorites: action.payload,
                allCharacters: action.payload
            };
        //remove fav solo front
        /*
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(fav => fav.id !== Number(action.payload))
            }
            */
        case 'REMOVE_FAV':
            return {
                ...state,
                myFavorites: action.payload
            }; 
        case FILTER:
            // EXTRA: => Caso "All"
            if (action.payload === "All") return {
                ...state,
                myFavorites: state.allFavChars
            }
            const allFavCharsFiltered = state.allFavChars.filter(fav =>
                fav.gender === action.payload
            );
            return {
                ...state,
                myFavorites: allFavCharsFiltered
            }
        case ORDER:
            const allFavCharsCopy = [...state.allFavChars];
            //if(action.payload === 'A') allFavCharsCopy.sort((a,b)=> a.id - b.id);
            //if(action.payload === 'D') allFavCharsCopy.sort((a,b)=> b.id - a.id);
            return {
                ...state,
                //myFavorites: allFavCharsCopy
                myFavorites: action.payload === 'A'
                    ? allFavCharsCopy.sort((a, b) => a.id - b.id)
                    : allFavCharsCopy.sort((a, b) => b.id - a.id)
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer;