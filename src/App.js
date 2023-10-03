import Nav from './Componentes/Nav/Nav'
import Cards from './Componentes/Cards/Cards'
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom'
import React, { useState, useEffect} from 'react'
import Detail from './Componentes/Detail/Detail'
import './App.css';
import About from './Componentes/About/About';
import Form from './Componentes/Form/Form'
import Favorites from './Componentes/Favorites/Favorites'
import axios from 'axios'


function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState('false');

  

  useEffect(()=>{
    !access && navigate('/');
  },[access,navigate]);
  
  const login = async (inputs) => {
    
    try {
      
      const { email, password } = inputs
      
      const URL = 'http://localhost:3001/rickandmorty/login/';
      
      const response = await axios.get(URL + `?email=${email}&password=${password}`)
      
      const { access } = response.data;
      
      setAccess(access);
      
      access && navigate('/home');
   
    } catch (error) {
      
      console.log(error.message)
    
    }
  }


  const onSearch = async (characterID) =>{
    
    try {
    
      const response = await axios.get(`http://localhost:3001/rickandmorty/character/${characterID}`)
     
     const { data } = response
      
      if(data.name){setCharacters((previoEstado)=>[...previoEstado,data])}
    
    } catch (error) {
      
      console.log(error.message)
    
    }
}

  
  const onClose = (id) => setCharacters((previoEstado)=> previoEstado.filter((ch)=>ch.id !== +id));
  
  return (
    <div className="App">
       {location.pathname !== '/'? <Nav onSearch = {onSearch}/> : undefined} 
      <Routes>
        
        <Route path='/home' element={<Cards characters = {characters} onClose = {onClose}/>}/>

        <Route path='/about' element={<About/>}/>

        <Route path='detail/:id' element={<Detail/>}/>

        <Route path='/' element={<Form login={login}/>}/>

        <Route path='/favorites' element={<Favorites/>}/>


      </Routes>
    
       
    </div>
  );
}

export default App;
