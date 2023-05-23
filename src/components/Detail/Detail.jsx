import React from "react";
import axios from "axios";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Detail(props) {
    
    const { id } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${props.id}`)
        .then((response) => response.json())
        .then((char) => {
            if (char.name) {
                setCharacter(char);
            } else {
                window.alert('No hay personajes con ese ID');
            }
        })
        .catch((error) =>{
            window.alert('No hay personaje con ese ID')
        })
        return setCharacter({});
    }, [props.id]);

    return (
        <div>
            <Link to='/home'>
                <button>Go Back</button>
            </Link>
            <h2>Detail</h2>
            <h2>{character.name}</h2>
            <h2>{character.status}</h2>
            <h4>{character.species}</h4>
            <h4>{character.gender}</h4>
            {character.origin && <h4>{character.origin.name}</h4>}
            <img src={character.image} alt={character.name} />
        </div>
    )
}