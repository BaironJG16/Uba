import React from 'react'
import './PrincipalPage.css'
import NavBarPrincipal from '../../Components/NavBarPrincipal/NavBarPrincipal';
import SideBar from '../../Components/SideBar/SideBar';


function PrincipalPge() {
  return (
    <div>
      

<header className="header2">
<NavBarPrincipal></NavBarPrincipal>
<header>
	<div className="overlay2">
<h1>Bienvenido/a</h1>
<h3>Que gusto volverte a ver! :)</h3>
<p>En este momento estás en la página principal, puedes encontrar otras secciones a tu izquierda o bien haciendo scroll hacia abajo dandole clic a los iconos.</p>
		</div>
</header>
</header>
<div class="InventarioIcono">
  <div class="details">
    <div class="cardHeader">Inventario</div>
    <div class="cardText">
      Aquí puedes agregar y eliminar los productos recién ingresados o los que ya no necesites.
    </div>
    <div class="button">Vamos</div>
  </div>
</div>


<div class="UsuariosIcono">
  <div class="details">
    <div class="cardHeader">Usuarios</div>
    <div class="cardText">
      Aquí puedes editar, cambiar o agregar tus datos personales.
    </div>
    <div class="button">Vamos</div>
  </div>
</div>

<div class="RegistrosIcono">
  <div class="details">
    <div class="cardHeader">Usuarios</div>
    <div class="cardText">
      Aquí puedes editar, cambiar o agregar tus datos personales.
    </div>
    <div class="button">Vamos</div>
  </div>
</div>

<div class="SedesIcono">
  <div class="details">
    <div class="cardHeader">Sedes</div>
    <div class="cardText">
      Aquí puedes editar, cambiar o agregar tus datos personales.
    </div>
    <div class="button">Vamos</div>
  </div>
</div>

<div>
<SideBar></SideBar>
</div>

    </div>
  )
}

export default PrincipalPge