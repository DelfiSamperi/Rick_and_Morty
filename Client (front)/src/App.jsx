import './App.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'; 
import About from './components/About/About';
import Nav from './components/Nav/Nav';
import Cards from './components/Cards/Cards';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import PageNotFound from './components/404/PageNotFound';
import Favorites from './components/Favorites/Favs';

//esto ahora viene del back
/*
const email = 'delfi@mail.com'
const password = 'hola123'
*/
function App() {

   const [characters, setCharacters] = useState([]);
   const {pathname} = useLocation();

   const navigate = useNavigate();
   const [ access, setAccess] = useState(false);
   
   //funcion login cuando solo tenemos el front
   /*
   const login = (userData) => {
      if(userData.email === email && userData.password === password) {
         setAccess(true)
         navigate('/home')
      }
   }
   */
  
   //funcion login vinculando al server
   function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`)
      .then(({ data }) => {
         const { access } = data;
         setAccess(access);
         access && navigate('/home');
      });
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const onSearch = (id) => {
      //id: evento que viene desde la searchbar
      //peticion a la API cusndo era solo front
      //axios(`https://rickandmortyapi.com/api/character/${id}`)
      //ahora pedira al server
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
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
         {/*renderizado condicional*/}
         {
            pathname !== "/"
            ? <Nav onSearch={onSearch}/>
            : null
         }
         
         <Routes>
            <Route exact path='/' element={<Form login={login} />} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About/>} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='*' element={<PageNotFound/>} />
            <Route path='/favorites' element={<Favorites onClose={onClose} />} />
         </Routes>
         
      </div>
   );
}

export default App;
