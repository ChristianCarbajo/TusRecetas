import logo from './IMG/logo.png';
import './App.css';
import FormPageView from './View/FormPageView';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainPage from './Components/MainPage/MainPage';
import CookingRecipePage from './Components/CookingRecipePage/CookingRecipePage'
import { Link } from 'react-router-dom';

function App() {
    const router = createBrowserRouter([{
      path: "/",
       element: <MainPage />
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
