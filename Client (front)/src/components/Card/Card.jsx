import React from "react";
import './Card.css';
import { Link } from 'react-router-dom';
import { addFav, removeFav } from "../../Redux/actions";
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

const Card = (props) => {

    const [isFav, setFavs] = useState(false);

    useEffect(() => {
        props.myFavorites.forEach((fav)=> {
            if(fav.id === props.id) {
                setFavs(true);
            }
        })
    }, [props.myFavorites]);

    const handleFavorite = () => {
        isFav ? props.removeFav(props.id) : props.addFav(props)
        setFavs(!isFav)
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
            {
                    isFav ? (
                        <button onClick={handleFavorite}>❤️</button>
                    ) : (
                        <button onClick={handleFavorite}>🤍</button>
                    )
                }
            <button onClick={() => props.onClose(props.id)}>X</button>
            </div>
                        
            <div className="dataContainer">
                <Link to={`/detail/${props.id}`}>
                    <h2 className="link">{props.name}</h2>
                </Link>
                <h2>{props.status} </h2>
                <h4>{props.species}</h4>
                <h4>{props.gender}</h4>
                <h4>{props.origin}</h4>
            </div>

            <img className="image" src={props.image} alt={props.name} />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addFav: (character) => dispatch(addFav(character)),
        removeFav: (id) => dispatch(removeFav(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);