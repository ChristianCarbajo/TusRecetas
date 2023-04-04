import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import './RecipeCard.css'



const RecipeCard = ({id, title, url}) => {
  
  let navigate = useNavigate()


  return (
    
    <div>
      <div className='cardContainer'>
        <div className='cardImage'>
            <img  src={url} alt='' />
        </div>
        <h3 onClick={()=> {navigate("/CookingRecipePage", {state: {id}})}} className='cardText'>{title}</h3>
      </div>      
    </div>
     
  )
}
export default RecipeCard