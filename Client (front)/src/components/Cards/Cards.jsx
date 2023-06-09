import React from "react";
import Card from "../Card/Card";
import './Cards.css';

export default function Cards(props) {
   const { characters, onClose } = props;

   return (
      <div className="cardsContainer">
         {
            characters.map((character)=>{
              return (
               <Card 
               key={character.id}
               id={character.id}
               name={character.name}
               status={character.status}
               species={character.species}
               gender={character.gender}
               origin={character.origin.name}
               image={character.image}
               onClose={onClose}
               />
              )
            })
         }
      </div>
   )

};