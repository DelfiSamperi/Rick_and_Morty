import React from "react";
import './Nav.css';
import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from 'react-router-dom';

export default function Nav(props) {
    const { onSearch } = props;

    return (
        <div className="nav">
            <NavLink to='/about' activeclassname='active'>About</NavLink>
            <NavLink to='/home' activeclassname='active'>Home</NavLink>
            <SearchBar onSearch={onSearch} />
        </div>
    )
}