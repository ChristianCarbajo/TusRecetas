import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import './RecipeCard.css'



const RecipeCard = ({id, title, url}) => {
  
  let navigate = useNavigate()


  return (
    

     
        <div className='cardImage'>
          <img  src={url} alt='' />      
          <h3 onClick={()=> {navigate("/CookingRecipePage", {state: {id}})}} className='cardText'>{title}</h3>
        </div> 

     
  )
}
export default RecipeCard