import './App.css'
import Nav from './components/Nav/Nav';
import Cards from './components/Cards/Cards';
import { useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom'; 
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';

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
            window.alert('¡No hay personajes con este ID o el personaje ya esta en la lista!');
         }
         console.log(characters)
      });
   }
 
   const onClose = (id) => {
      setCharacters(characters.filter(character => character.id !== Number(id)));
      console.log('personaje borrado: ', id)
   }
      
   return (
      <div className='App'>
         
         <Nav onSearch={onSearch} />
         <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About/>} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/' element={<Form />} />
         </Routes>
         
         
      </div>
   );
}

export default App;
