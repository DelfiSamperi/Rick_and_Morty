import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer'; 
import thunk from 'redux-thunk';
//con el de arriba podemos usar redux dev tools

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// esta línea es para conectar con la extensión del navegador => REDUX DEVTOOLS 


const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunk)) //permite hacer peticiones a un server externo
); 

export default store; 