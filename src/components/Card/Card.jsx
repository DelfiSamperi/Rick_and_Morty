import React from "react";
import './Card.css';
import { Link } from 'react-router-dom';

export default function Card(props) {

    return (
        <div className="container">
            <div className="buttonContainer">
            <button onClick={() => props.onClose(props.id)} >X</button>
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