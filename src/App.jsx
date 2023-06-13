import './App.css'
import Nav from './components/Nav/Nav';
import Cards from './components/Cards/Cards';
import { useState, useEffect, useNavigate } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom'; 
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import PageNotFound from './components/404/PageNotFound';

function App() {

   const [characters, setCharacters] = useState([]);
   const [ access, setAccess] = useState(false);
   const email = 'delfi@mail.com'
   const password = 'hola123'
   //const navigate = useNavigate();

   const login = (userData) => {
      if(userData.email === email && userData.password === password) {
         setAccess(true)
         navigate(()=>{'/home'})
      }
   }

   // useEffect(() => {
   //    !access && navigate('/');
   // }, [access]);

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
            <Route exact path='/' element={<Form login={login} />} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About/>} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='*' element={PageNotFound} />
         </Routes>
         
         
      </div>
   );
}

export default App;
