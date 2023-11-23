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

<div>

<div className="form-container">
        <h2>Agregar Producto al Inventario</h2>
        <form className="productForm">
            <label for="productName">Nombre del Producto</label>
            <input type="text" id="productName" className="productName" required/>

            <label for="category">Categoria</label>
            <select id="category" className="Category">
                <option value="lacteos">Lácteos</option>
                <option value="No-Perecederos">No Perecedero</option>
                <option value="Vegetales">Vegetales</option>
                <option value="Frutas">Frutas</option>
                <option value="Carnes">Carnes</option>
                <option value="Pescado">Pescado</option>
            </select>

            <label for="quantity">Cantidad</label>
            <input type="number" id="quantity" className="quantity" required min={1}/>

            <label for="unit">Unidad de Medida</label>
            <select id="unit" className="unit">
                <option value="kg">Kilogramos</option>
                <option value="g">Gramos</option>
                <option value="l">Litros</option>
                <option value="ml">Mililitros</option>
                <option value="latas">Latas</option>
                <option value="Unidades">Unidades</option>
                <option value="Paquetes">Paquetes</option>
                <option value="Rollos">Rollos</option>
                <option value="Galón">Galón</option>

            </select>

            <label for="date">Fecha</label>
            <input type="date" id="date" className="date" required/>

            <label for="week">Semana</label>
            <select id="week" className="week">
                <option value="semana1">Semana #1</option>
                <option value="semana2">Semana #2</option>
                <option value="semana3">Semana #3</option>
                <option value="semana4">Semana #4</option>
              
            </select>

            <input type="submit" value="Agregar al Inventario"/>
        </form>

        <div className="result-container">
            <h2>Inventario</h2>
            <table className="inventoryTable">
                <thead>
                    <tr>
                        <th>Nombre del Producto</th>
                        <th>Categoría</th>
                        <th>Cantidad solicitada</th>
                        <th>Cantidad recibida</th>
                        <th>Unidad de Medida</th>
                        <th>Fecha</th>
                        <th>Día de la Semana</th>
                    </tr>
                    </thead>
                    </table>
</div>                  
</div>
</div>
    <div>
  <SideBar></SideBar>
  </div>
</div>
)
}

export default Invetory