import React from "react";
import './Nav.css';
import SearchBar from "../SearchBar/SearchBar";

export default function Nav(props) {
    const { onSearch } = props;

    return (
        <div className="nav">
            <SearchBar onSearch={onSearch} />
        </div>
    )
}