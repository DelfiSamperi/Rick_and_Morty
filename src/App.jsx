import './App.css'
import characters, { Rick } from './data.js';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import Cards from './components/Cards/Cards';
import Card from './components/Card/Card';

function App() {
   return (
      <div className='App'>
         <SearchBar onSearch={(characterID) => window.alert(characterID) } />
         <Cards characters={characters} />
         <Card
            id={Rick.id}
            name={Rick.name}
            status={Rick.status}
            species={Rick.species}
            gender={Rick.gender}
            origin={Rick.origin.name}
            image={Rick.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
         />
      </div>
   );
}

export default App;
