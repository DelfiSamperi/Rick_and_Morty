import './Favs.css';
import Card from '../Card/Card';
import { useDispatch, connect } from 'react-redux';
import { filterCards, orderCards } from '../../Redux/actions';
import { useState } from 'react';

const Favorites = ({ myFavorites }) => {
    const dispatch = useDispatch();
    const [aux, setAux] = useState(false);

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value))
        setAux(!aux);
    };

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    };

    return (  
        <div className='favsContainer'>
            <select onChange={handleOrder}>
                <option value='A'>Ascendente</option>
                <option value='D'>Descendente</option>
            </select>

            <select onChange={handleFilter}>
                <option value="All">All</option>
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
                <option value='Genderless'>Genderless</option>
                <option value='unknown'>unknown</option>
            </select>

            {  myFavorites.length &&
            myFavorites.map(character => (  
                    <Card
                            key={character.id}
                            id={character.id}
                            name={character.name}
                            status={character.status}
                            species={character.species}
                            gender={character.gender}
                            origin={character.origin?.name}
                            image={character.image}
                            onClose={character.onClose}
                        />
                ))
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
};

export default connect(mapStateToProps, null)(Favorites);