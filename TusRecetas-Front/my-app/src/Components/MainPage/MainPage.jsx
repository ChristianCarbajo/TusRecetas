import RecipeCard from '../RecipeCard/RecipeCard';
import './MainPage.css';
import { useEffect, useState } from 'react';
import ApiGetService from '../../Services/ApiGetService';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';

function MainPage() {
  const url = "http://localhost:8080/api/v1/cookingrecipes"
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    ApiGetService(url)
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  const handleSearch = (searchTerm) => {
   
    const results = data.filter((item) => {
      
      const titleMatch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
      const ingredientsMatch = item.ingredients.toLowerCase().includes(searchTerm.toLowerCase());
      const categoriesMatch = item.categories.toLowerCase().includes(searchTerm.toLowerCase())
      return titleMatch || ingredientsMatch || categoriesMatch;
    });
    setFilteredData(results);
  }

  const itemsToRender = filteredData.length > 0 ? filteredData : data;

  return (
    <div className='main'>
      <div className='addRecipe'>
        <Link to="/CookingRecipeForm"><button className='addRecipeButton'>Añade una receta</button></Link>
      </div>
      <div className='searchBar'>
        <SearchBar handleSearch={handleSearch} />
      </div>
      {itemsToRender.length > 0 ?
        itemsToRender.map((item) => (
          <RecipeCard key={item.id} id={item.id} title={item.title} url={item.url} ingredients={item.ingredients} categories={item.categories} description={item.description}/>
        ))
        :
        <h3>No hay resultados de búsqueda</h3>
      }
    </div>
  )
}

export default MainPage;