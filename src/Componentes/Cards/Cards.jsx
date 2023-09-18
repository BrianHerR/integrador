import React from 'react'
import Card from '../Card/Card'

const Cards = ({characters, onClose}) => {
  return (
    <div>
        {characters.map(character => 
        <Card
        key = {character.id}
        id = {character.id}
        name = {character.name}
        status = {character.status}
        species= {character.species}
        gender= {character.gender}
        image= {character.image}
        onClose={onClose}
        />)}

    </div>
  )
}

export default Cards