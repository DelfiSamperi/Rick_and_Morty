import React from "react";
import './SearchBar.css';

export default function SearchBar(props) {
   
   return (
      
      <div className="searchBar">
         
         <input type='search' />
         <button className="btn" onClick={(id) => {props.onSearch(id)}}>Agregar</button>
      
      </div> 
      
   );
}