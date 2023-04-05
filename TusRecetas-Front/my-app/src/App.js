import logo from './IMG/logo.png';
import './App.css';
import FormPageView from './View/FormPageView';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainPageView from './View/MainPageView';
import CookingRecipePage from './Components/CookingRecipePage/CookingRecipePage'
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
         element: <CookingRecipePage />
}]);
      return (
      
        <div className="App">
       
             
              <RouterProvider router={router} />
        </div>
      );

}

export default App;
