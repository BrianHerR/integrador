import Nav from './Componentes/Nav/Nav'
import Cards from './Componentes/Cards/Cards'
import {Routes, Route} from 'react-router-dom'
import React, { useState, useEffect} from 'react'
import Detail from './Componentes/Detail/Detail'
import './App.css';
import About from './Componentes/About/About'



function App() {
  
  const [characters, setCharacters] = useState([])

  const onSearch = (characterID) =>{
   
    fetch(`http://localhost:3001/rickandmorty/character/${characterID}`)
    .then((response)=>response.json())
    .then((data)=>{
      if(data.name){setCharacters((previoEstado)=>[...previoEstado,data])}
      
    })
    .catch((error)=>window.alert(error.message))
  }

  
  const onClose = (id) => setCharacters((previoEstado)=> previoEstado.filter((ch)=>ch.id !== +id));
  
  return (
    <div className="App">
       <Nav onSearch = {onSearch}/>
      <Routes>
        
        <Route path='/home' element={<Cards characters = {characters} onClose = {onClose}/>}/>

        <Route path='/about' element={<About/>}/>

        <Route path='detail/:id' element={<Detail/>}/>


      </Routes>
    
       
    </div>
  );
}

export default App;
