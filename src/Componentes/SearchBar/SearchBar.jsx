import React from 'react'
import { useState } from 'react';
const SearchBar = ({onSearch}) => {
    
    let [character, setCharacter] = useState('');

    const handleChange = (event)=>{
       setCharacter(event.target.value);
    };
  
    return (
    <div>
        
        <input type="search" onChange={handleChange} value={character}/>
        
        <button onClick={()=>{onSearch(character)}} >Agregar</button>
    
    </div>
  )
}

export default SearchBar