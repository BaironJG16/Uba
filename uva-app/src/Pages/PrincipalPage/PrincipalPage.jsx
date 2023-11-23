import React from 'react'
import './PrincipalPage.css'
import NavBarPrincipal from '../../Components/NavBarPrincipal/NavBarPrincipal';
import SideBar from '../../Components/SideBar/SideBar';
import fondo from '../../assets/img/fondo.jpeg';
import niños2 from '../../assets/img/niños2.png';
import { useNavigate } from 'react-router-dom';

function PrincipalPge() {

  const navigation = useNavigate();

function handleInventory() {
navigation('/Inventory')
}

function handleUsers() {
  navigation('/Users')
  }

function handleFiles() {
  navigation('/Files')
  }

function handleOffices() {
  navigation('/BranchOffices')
    }

function handleAttendance() {
  navigation('/AttendanceList')
    }    

  
  return (
    <div>
      
      <img className='fondo' src={fondo} alt='fondo'></img>


<NavBarPrincipal></NavBarPrincipal>


<header className="header3">
	
	<div className="text-box">
    <div className="loader">
		<h1 className="heading-primary">Bienvenido/a</h1>
			<span className="heading-primary-sub3">Algo tengo que poner aquí</span>
		<img className='carton' src={niños2} alt="niños" />
	</div>
  </div>
  
</header>




<div class="InventarioIcono">
  <div class="details">
    <div class="cardHeader">Inventario</div>
    <div class="cardText">
      Aquí puedes agregar y eliminar los productos recién ingresados o los que ya no necesites.
    </div>
    <div class="button" onClick={handleInventory}>Vamos</div>
  </div>
</div>


<div class="RegistrosIcono">
  <div class="details">
    <div class="cardHeader">Registros</div>
    <div class="cardText">
      Chequea todos los registros y datos ingresados durante este día.
    </div>
    <div class="button" onClick={handleFiles}>Vamos</div>
  </div>
</div>

<div class="SedesIcono">
  <div class="details">
    <div class="cardHeader">Sedes</div>
    <div class="cardText">
      Aquí puedes ver las sedes al rededor como su información de Contacto.
    </div>
    <div class="button" onClick={handleOffices}>Vamos</div>
  </div>
</div>


<div class="ListaIcono">
  <div class="details">
    <div class="cardHeader">Asistencia de niños</div>
    <div class="cardText">
      Ingresa y lleva un control de la lista de niños asistidos el día de hoy.
    </div>
    <div class="button" onClick={handleAttendance}>Vamos</div>
  </div>
</div>


<div>
<SideBar></SideBar>
</div>

    </div>
   
  )
}

export default PrincipalPge