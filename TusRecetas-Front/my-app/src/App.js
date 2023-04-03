import logo from './logo.svg';
import './App.css';
import CookingRecipeForm from './Components/CookingRecipeForm/CookingRecipeForm';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

function App() {
    // const router = createBrowserRouter([{
    //      path: "/",
    //      element: <MainPage />
    //    }, {
    //       path: "/CookingRecipeForm",
    //       element: <CookingRecipeForm />
    //      },{
    //        path: "/CookingRecipePage",
    //        element: <CookingRecipePage />
    //     }
    //   ]);
      return (
        <div>
            <CookingRecipeForm />
        </div>
        // <div className="App">
        //       <RouterProvider router={router} />
        // </div>
      );

}

export default App;
