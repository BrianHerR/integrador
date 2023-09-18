import Nav from './Componentes/Nav/Nav'
import Cards from './Componentes/Cards/Cards'
import {Routes, Route} from 'react-router-dom'
import React, { useState } from 'react'
import './App.css';

function App() {
  const [characters, setCharacters] = useState([])
  
  const onSearch = (characterID) =>{
   
    fetch(`https://rickandmortyapi.com/api/character/${characterID}`)
    .then((response)=>response.json())
    .then((data)=>{
      if(data.name){setCharacters((previoEstado)=>[...previoEstado,data])}
      else{window.alert(`Hay un problema: ${data.error}`)}
    })}  
  
  const onClose = (id) => setCharacters((previoEstado)=> previoEstado.filter((ch)=>ch.id !== +id));
  return (
    <div className="App">
       <Nav onSearch = {onSearch}/>

       <Cards characters = {characters} onClose = {onClose}/>
    </div>
  );
}

export default App;
