import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({onClose, id, name, status, species, gender, image}) => {
   
    return (
    <div>
        <button onClick={()=>{onClose(id)}} >x</button>
        <h2>{id}</h2>
        
        <Link to={`/detail/${id}`}>
        <h2>{name}</h2>
        </Link>
        
        <h2>{status}</h2>
        <h2>{species}</h2>
        <h2>{gender}</h2>

        <img src={image} alt="" />
    </div>
  )
}

export default Card