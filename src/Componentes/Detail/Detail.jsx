import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

 
const Detail = () => {
    const {id} = useParams();
    const [character, setCharacter] = useState({})
    
    useEffect(()=>{
        axios(`http://localhost:3001/rickandmorty/character/${id}`)
          .then(({data})=>{
            if(data.name){
                setCharacter(data)
            }else{window.alert(`No se encontro el personaje${id}`)}
          })
          return setCharacter({});
        },[id])
  
    
    return (
    <div>
            <h2>{character?.name}</h2>
            
            <h2>{character?.gender}</h2>
            
            <h2>{character?.species}</h2>
            
            <h2>{character?.status}</h2>
            
            <img src={character?.image} alt=""/>
        
    </div>
  )
}

export default Detail