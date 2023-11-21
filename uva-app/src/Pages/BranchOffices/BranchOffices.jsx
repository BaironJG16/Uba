import React from 'react'
import "./BranchOffices.css"
import NavBarPrincipal from '../../Components/NavBarPrincipal/NavBarPrincipal';
import SideBar from '../../Components/SideBar/SideBar';
import fondo from '../../assets/img/fondo.jpeg';
import map from '../../assets/img/map.png';


function BranchOffices() {
  return (
    <div>

<img className='fondo' src={fondo} alt='fondo'></img>

<NavBarPrincipal></NavBarPrincipal>

<header className="header3">
	
	<div className="text-box">
    <div className="loader2">
		<h1 className="heading-primary2">LOCACIÓN</h1>
			<span className="heading-primary-sub4">Algo tengo que poner aquí</span>
		<img className='map' src={map} alt="mapa" />
	</div>
  </div>
  
</header>

<div>
  <SideBar></SideBar>
</div>
    </div>
  )
}

export default BranchOffices