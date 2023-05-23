import React from "react";
import './SearchBar.css';
import { useState } from 'react';

export default function SearchBar(props) {
   const { onSearch } = props;
   const [id, setId] = useState('');

   const handleChange = (event) => {
      const {value} = event.target;
      setId(value);
      console.log('id: ', id);
   }
   
   return (

      <div className="container">

         <input
            type='text'
            name='search'
            id='search'
            onChange={handleChange}
         
         />
         <button className="btn" onClick={() => { onSearch(id), setId('') /*con la ultima borro el valor del input*/}}>Agregar</button>

      </div>

   );
}