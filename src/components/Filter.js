import React, {useState} from "react";

function Filter({ onFilterChange }) {

    
    return(
        <select onChange={onFilterChange}>
            <option>All</option>
            <option>Greased</option>
        </select>
    );

}

export default Filter;