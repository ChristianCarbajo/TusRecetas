import RecipeCard from '../RecipeCard/RecipeCard';
import './MainPage.css';
import { useEffect, useState } from 'react';
import ApiGetService from '../../Services/ApiGetService';
import SearchBar from '../SearchBar/SearchBar';


function MainPage() {
  const url = "http://localhost:8080/api/v1/cookingrecipes"
  const [data, setData] = useState([]);

  useEffect(() => {
    ApiGetService(url)
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
        <SearchBar/>
      {JSON.stringify(data) !== JSON.stringify([]) ?
        data.map((item) => (
          <RecipeCard key={item.id} id={item.id} title={item.title} url={item.url} />
        ))
        :
        <h3>No hay ninguna receta</h3>
      }

    </div>
  )
}

export default MainPage;