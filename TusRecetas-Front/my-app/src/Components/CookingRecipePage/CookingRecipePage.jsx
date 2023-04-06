import { useState, useEffect } from "react";
import ApiGetbyIdService from "../../Services/ApiGetIdService";
import ApiGetService from "../../Services/ApiGetService";
import { AiFillDelete, AiFillEdit } from "react-icons/ai"
import "./CookingRecipePage.css";
import { useLocation, useNavigate } from "react-router-dom";
import ApiDeleteService from "../../Services/ApiDeleteService";
import { Link } from 'react-router-dom';



function CookingRecipePage() {
  const url = "http://localhost:8080/api/v1/cookingrecipes"
  const idInState = useLocation().state.id
  const [data, setData] = useState([{}]);
  const navigate = useNavigate()

  const handleDelete = () => {
    ApiDeleteService(url, idInState)
      .then(() => window.location.reload())
      .catch((error) => console.error(error));
  }


  useEffect(() => {
    ApiGetbyIdService(url, idInState)
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="recipeBody">
      <div className="recipeImgContainer">
        <img src={data.url} alt="art-img" className="recipeImg" />
      </div>
      <div className="recipeIcons">
       <Link to="/"><AiFillDelete onClick={ handleDelete } className="recipeIcon" size={25} color="black" /></Link>
      <AiFillEdit onClick={() => { navigate("/CookingRecipeForm", { state: { id: idInState } }) }} className="recipeIcon" size={25} color="black" />
      </div>
      
      <h2 className="recipeTitle">{data.title}</h2>
      <p className="recipeCategoryText">Categoría:</p>
      <p className="recipeCategory">{data.categories}</p>
      <p className="recipeIngredientsText">Ingredientes:</p>
      <p className="recipeIngredients">{data.ingredients}</p>  
      <div className="recipeDescriptionContainer">
      <p className="recipeDescriptionText">Receta:</p>
        <p className="recipeDescription">
          {data.description}
        </p>
      </div>
    </div>
  );
}


export default CookingRecipePage;