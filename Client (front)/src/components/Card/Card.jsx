import React from "react";
import './Card.css';
import { Link } from 'react-router-dom';
import { addFav, removeFav } from "../../Redux/actions";
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

const Card = ({id, name, status, origin, species, image, gender, onClose, removeFav, addFav, myFavorites}) => {
    
    const [isFav, setFavs] = useState(false);

   /* useEffect(() => {
        myFavorites.forEach((fav) => {
            if (fav.id === id) {
                setFavs(true);
            }
        })
    }, [myFavorites]);
    */
    const handleFavorite = () => {
        isFav ? removeFav(id) : addFav({id, name, status, origin, species, image, gender, onClose, myFavorites})
        setFavs(!isFav)
        console.log('fav cambiado')
    }

    //seria lo mismo que:
    /*
    const handleFavorite = () => {
      if(isFav) {
         setIsFav(false);
         props.removeFav(props.id);
      } else {
         setIsFav(true);
         props.addFav(props);
      }
   };
    */

    return (
        <div className="container">
            <div className="buttonContainer">
                { /*
                    isFav ? (
                        <button onClick={handleFavorite}>❤️</button>
                    ) : (
                        <button onClick={handleFavorite}>🤍</button>
                    ) */
                }
                {( //lo de arriba pero mas simple
                <button onClick={handleFavorite}>{isFav ? '❤️' : '🤍'}</button>
                )}
                
                <button onClick={() => onClose(id)}>X</button>
            </div>

            <div className="dataContainer">
                <Link to={`/detail/${id}`}>
                    <h2 className="link">{name}</h2>
                </Link>
                <h2>{status} </h2>
                <h4>{species}</h4>
                <h4>{gender}</h4>
                <h4>{origin}</h4>
            </div>

            <img className="image" src={image} alt={name} />
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        addFav: (character) => dispatch(addFav(character)),
        removeFav: (id) => dispatch(removeFav(id))
    }
};

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);