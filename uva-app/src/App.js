import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login/Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignUp from './Pages/SignUp/SignUp';
import Footer from './Components/Footer/Footer';
import PrincipalPge from './Pages/PrincipalPage/PrincipalPage';
import Inventory from './Pages/Inventory/Inventory';
import Users from './Pages/Users/Users';
import BranchOffices from './Pages/BranchOffices/BranchOffices';
import AttendanceList from './Pages/AttendanceList/AttendanceList';
import Files from './Pages/Files/Files';


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
      element: <Inventory></Inventory>
   
    },

    {
      path: "/Users",
      element: <Users></Users>
   
    },

    {
      path: "/BranchOffices",
      element: <BranchOffices></BranchOffices>
   
    },

    {
      path: "/AttendanceList",
      element: <AttendanceList></AttendanceList>
    },

    {
      path: "/Files",
      element: <Files></Files>
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