import React from 'react'
import "./Inventory.css"
import SideBar from '../../Components/SideBar/SideBar';
import NavBarPrincipal from '../../Components/NavBarPrincipal/NavBarPrincipal'
import carton from '../../assets/img/carton.png';
import fondo from '../../assets/img/fondo.jpeg';



function Invetory() {

   

  return (
    <div>
<img className='fondo' src={fondo} alt='fondo'></img>
<NavBarPrincipal></NavBarPrincipal>
<header className="header3">
	<div className="text-box">
    <div className="loader3">
		<h1 className="heading-primary">Inventario</h1>
			<span className="heading-primary-sub2">Algo tengo que poner aquí</span>
		<img className='carton2' src={carton} alt="carton" />
	</div>
  </div>
  
</header>

  <SideBar></SideBar>
  </div>
)
}

export default Invetory