import React from "react";
import Card from "../Card/Card";
import './Cards.css';

export default function Cards(props) {
   const { characters } = props;

   return (
      <div className="card">
         {
            characters.map(character=>{
              return (
               <Card 
               onClose={() => window.alert("Emulamos qe se cierra la tarjeta")}
               key={character.id}
               name={character.name}
               status={character.status}
               species={character.species}
               gender={character.gender}
               origin={character.origin.name}
               image={character.image}
               />
              )
            })
         }
      </div>
   )

};