import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {  useDispatch, useSelector } from 'react-redux'
import { addFav, removeFav } from '../../redux/actions'


const Card = (props) => {
   const {onClose, id, name, status, species, gender, image} = props
    const allCharacters = useSelector((state)=>state.allCharacters)
    const dispatch = useDispatch()
    const [isFav, setIsfav] = useState(false)
    
    const handleFavorite = ()=>{
      isFav?dispatch(removeFav(id)):dispatch(addFav(props));
      setIsfav(!isFav)}

    useEffect(()=>{
      allCharacters.forEach((fav)=>{
        if(fav.id === id){
          setIsfav(true)
        }
      })
    },[allCharacters])


    return (
    <div>
        {isFav?<button onClick={handleFavorite}>❤️</button>:<button onClick={handleFavorite}>🤍</button>}
        <button onClick={()=>{onClose(id)}} >x</button>
        
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