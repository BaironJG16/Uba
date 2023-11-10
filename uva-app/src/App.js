import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login/Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignUp from './Pages/SignUp/SignUp';
import Footer from './Components/Footer/Footer';
import PrincipalPge from './Pages/PrincipalPage/PrincipalPage';
import Invetory from './Pages/Inventory/Invetory';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login></Login>
   
    },

    {
      path: "/SignUp",
      element: <SignUp></SignUp>
    },

    {
      path: "/principalPage",
      element: <PrincipalPge></PrincipalPge>
    },

    {
      path: "/Inventory",
      element: <Invetory></Invetory>
   
    },

  ])

  return (
    <div className="App">
     
<RouterProvider router={router}>
      </RouterProvider>

     
      
      
    
    
    <footer>
    <Footer></Footer>
  </footer>
  </div>
  
  
  );
}

export default App;