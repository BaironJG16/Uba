import React from 'react'
import './PrincipalPage.css'
import NavBarPrincipal from '../../Components/NavBarPrincipal/NavBarPrincipal';
import SideBar from '../../Components/SideBar/SideBar';
import fondo from '../../assets/video/fondo.webm';


function PrincipalPge() {
  return (
    <div>
      
      <video src={fondo} autoplay loop muted></video>

<header className="header2">
<NavBarPrincipal></NavBarPrincipal>
<header>
	<div className="overlay2">
<h1>Bienvenido/a</h1>
<h3>Que gusto volverte a ver! :)</h3>
<p className='frasePrincipal'>En este momento estás en la página principal, <br />puedes encontrar otras secciones a tu izquierda o bien haciendo scroll hacia abajo dandole clic a los iconos.</p>
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
    <div class="cardHeader">Registros</div>
    <div class="cardText">
      Chequea todos los registros y datos ingresados durante este día.
    </div>
    <div class="button">Vamos</div>
  </div>
</div>

<div class="SedesIcono">
  <div class="details">
    <div class="cardHeader">Sedes</div>
    <div class="cardText">
      Aquí puedes ver las sedes al rededor como su información de Contacto.
    </div>
    <div class="button">Vamos</div>
  </div>
</div>


<div class="ListaIcono">
  <div class="details">
    <div class="cardHeader">Asistencia de niños</div>
    <div class="cardText">
      Ingresa y lleva un control de la lista de niños asistidos el día de hoy.
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