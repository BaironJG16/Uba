import React from 'react'
import './AttendanceList.css'
import manos from '../../assets/img/Manos.png';
import fondo from '../../assets/img/fondo.jpeg';
import SideBar from '../../Components/SideBar/SideBar';
import NavBarPrincipal from '../../Components/NavBarPrincipal/NavBarPrincipal';

function AttendanceList() {
  return (
    <div>

<img className='fondo' src={fondo} alt='fondo'></img>


<NavBarPrincipal></NavBarPrincipal>


<header className="header3">
	
	<div className="text-box">
    <div className="loader">
		<h1 className="heading-primary">Asistencia</h1>
			<span className="heading-primary-sub3">Algo tengo que poner aquí</span>
		<img className='manos' src={manos} alt="manos" />
	</div>
  </div>
  
</header>


<div>
<SideBar></SideBar>
</div>
    </div>
  )
}

export default AttendanceList