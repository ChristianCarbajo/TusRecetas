import logo from './IMG/logo.png';
import './App.css';
import FormPageView from './View/FormPageView';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainPageView from './View/MainPageView';
import RecipePageView from './View/RecipePageView';
import { Link } from 'react-router-dom';

function App() {
    const router = createBrowserRouter([{
      path: "/",
       element: <MainPageView />
    }, {
        path: "/CookingRecipeForm",
        element: <FormPageView />
       },{
        path: "/CookingRecipePage",
         element: <RecipePageView />
}]);
      return (
      
        <div className="App">     
              <RouterProvider router={router} />
        </div>
      );

}

export default App;
