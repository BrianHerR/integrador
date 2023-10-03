import React, {useState} from 'react'
import Card from '../Card/Card';
import { useSelector, useDispatch } from 'react-redux';
import {filterCards, orderCards } from '../../redux/actions'

const Favorites = () => {
    const [aux, setAux] = useState(false);

    const myFavorites = useSelector(state => state.myFavorites)
    const dispatch = useDispatch();

    const handleOrder = (event)=>{
        dispatch(orderCards(event.target.value));
        setAux(!aux);
    }

    const handleFilter= (event)=>{
        dispatch(filterCards(event.target.value))
    }
    return (
        <div>
            <div>
                <div>
                    <select onChange={handleOrder}>
                        <option value="A">Ascendente</option>
                        <option value="D">Descendente</option>
                    </select>
                </div>
                <div>
                    <select onChange={handleFilter}>
                        <option value="ALL">Todos</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Genderless">Genderless</option>
                        <option value="Unknown">Unknown</option>
                    </select>
                </div>
            </div>
            <div>
                {console.log(myFavorites)};
            {myFavorites.map((favorite)=>{
                console.log(favorite)
           return <Card 
           key={favorite.id}
           id={favorite.id} 
           name ={favorite.name}
           status={favorite.status}
           species={favorite.species}
           gender={favorite.gender}
           image={favorite.image}
           onClose={favorite.onClose}
           />

        })}
            </div>
        </div>
        
        
        )
}

export default Favorites