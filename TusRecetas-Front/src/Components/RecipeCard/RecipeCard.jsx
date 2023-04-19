import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import './RecipeCard.css'



const RecipeCard = ({id, title, url, ingredients,categories, description}) => {
  
  let navigate = useNavigate()


  return (
    

     
        <div onClick={()=> {navigate("/CookingRecipePage", {state: {id,title,description,ingredients,url}})}}  className='cardImage'>
          <img  src={url} alt='' />   
          <div className='cardDescription'>  
          <h3 onClick={()=> {navigate("/CookingRecipePage", {state: {id,title,description,ingredients,url}})}} className='cardTitle'>{title}</h3>
          <p className='cardDescriptionItem'>Ingredientes: {ingredients}</p>
          <p className='cardDescriptionItem'>Categoría: {categories}</p>
          </div> 
        </div> 

     
  )
}
export default RecipeCard