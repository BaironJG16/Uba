import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login/Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignUp from './Pages/SignUp/SignUp';
import uva from './assets/img/uva.png'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login></Login>
   
    },

    {
      path: "/SignUp",
      element: <SignUp></SignUp>
    }

  ])

  return (
    <div className="App">
      <header> <nav class="navbar bg-body-tertiary">
  <div className="container">
    <a className="navbar-brand" href="http://localhost:3000/">
      <img src={uva} alt="uva logo" width="90" height="80"/>
    </a>
  </div>
</nav>
</header>
      <img className='uvaLogo' src={uva} alt='uva logo'></img>
      <p className='eslogan'> UVA App, organiza y administra <br/>
       tu empresa de la mejor manera. </p>
     
<RouterProvider router={router}>
      </RouterProvider>

     
      
      
      
    </div>
  );
}

export default App;