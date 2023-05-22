import './App.css'
import Nav from './components/Nav/Nav';
import Cards from './components/Cards/Cards';
import { useState } from 'react';
import axios from 'axios';

function App() {

   const [characters, setCharacters] = useState([]);

   const onSearch = (id) => {
      //id: evento que viene desde la searchbar
      //peticion a la API
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => response.data)
      .then((data) => { //si recibe respuesta entonces...
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            //no funciona
            window.alert('¡No hay personajes con este ID!');
         }
         console.log(characters)
      });
   }
 
   //no funciona
   const onClose = (id) => {
      setCharacters(characters.filter(character => character.id !== Number(id)));
      console.log('personaje borrado: ', id)
   }
      
   return (
      <div className='App'>
         
         <Nav onSearch={onSearch} />
         <Cards characters={characters} onClose={onClose} />
         
      </div>
   );
}

export default App;
