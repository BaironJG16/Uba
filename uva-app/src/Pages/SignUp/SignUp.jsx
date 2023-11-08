import React from 'react'
import "./SignUp.css"
import { useNavigate } from 'react-router-dom';

function SignUp() {

    const navigation = useNavigate();

    function handleLogin() {
    console.log("hola")
    navigation('/')
    }


  return (
    <div>
        <form class="form">
    <p class="title">Register </p>
    <p class="message">Registrate para tener acceso a UVA. </p>
        <div class="flex">
        <label>
            <input class="input" type="text" placeholder="" required=""/>
            <span>Nombre</span>
        </label>

        <label>
            <input class="input" type="text" placeholder="" required=""/>
            <span>Apellido</span>
        </label>
    </div>  
            
    <label>
        <input class="input" type="email" placeholder="" required=""/>
        <span>Correo electrónico</span>
    </label> 
        
    <label>
        <input class="input" type="password" placeholder="" required=""/>
        <span>Contraseña</span>
    </label>
    <label>
        <input class="input" type="password" placeholder="" required=""/>
        <span>Confirmar contraseña</span>
    </label>
    <button class="submit">Registrar</button>
    <p class="signin">Ya tienes una cuenta? <a href="http://localhost:3000/">Signin</a> </p>
</form>
    </div>
  )
}

export default SignUp