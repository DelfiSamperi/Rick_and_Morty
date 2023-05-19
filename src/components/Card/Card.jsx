import React from "react";
import './Card.css';

export default function Card(props) {

    return (
        <div className="card">
            <button onClick={props.onClose}>X</button>
            
            <div className="info">
                <h2>{props.name}</h2>
                <h2>{props.status} </h2>
                <h4>{props.species}</h4>
                <h4>{props.gender}</h4>
                <h4>{props.origin}</h4>
            </div>

            <img className="image" src={props.image} alt={props.name} />
        </div>
    );

}