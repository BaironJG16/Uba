import React from 'react'
import uvaAlone from '../../assets/img/uvaAlone.png';
import "./Inventory.css"
import SideBar from '../../Components/SideBar/SideBar';
import NavBarPrincipal from '../../Components/NavBarPrincipal/NavBarPrincipal';


function Invetory() {

   

  return (
    <div>

<header className="header">
    <NavBarPrincipal></NavBarPrincipal>
	<div className="brand-box">
	</div>
	
	<div className="text-box">
		<h1 className="heading-primary">
			<span className="heading-primary-main">Bienvenido/a a tu inventario</span>
			<span className="heading-primary-sub">Aquí podrás llevar control de tus artículos</span>
		</h1>
		<a href="kj" className="btn btn-white btn-animated">Discover our tours</a>
	</div>
</header>

  <SideBar></SideBar>
  </div>
)
}

export default Invetory