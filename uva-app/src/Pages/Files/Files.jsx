import React from 'react'
import './Files.css'
import SideBar from '../../Components/SideBar/SideBar';
import NavBarPrincipal from '../../Components/NavBarPrincipal/NavBarPrincipal'
import Archivos from '../../assets/img/Archivos.png';
import fondo from '../../assets/img/fondo.jpeg';

function Files() {


  return (
    <div>
      <img className='fondo' src={fondo} alt='fondo'></img>
<NavBarPrincipal></NavBarPrincipal>
<header className="header3">
	<div className="text-box">
    <div className="loader3">
		<h1 className="heading-primary">Inventario</h1>
			<span className="heading-primary-sub2">Algo tengo que poner aquí</span>
		<img className='Archivos' src={Archivos} alt="Archivos" />
	</div>
  </div>
  
</header>

  <SideBar></SideBar>
    </div>
  )
}

export default Files