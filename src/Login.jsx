import React from 'react';
import './Login.css'; 

function Login() {
    return (
        <>
        <header className="header">
        <div className="logo">
          <h1>Deskq</h1>
        </div>
        <nav className="navigation">
          <ul>
            <li><a href="/Login">Login</a></li>
            <li><a href="/Inicio">Inicio</a></li>
            <li><a href="/Escritorios">Escritorios</a></li>
          </ul>
        </nav>
        </header>

  <div className="login">
    <h2>Iniciar Sesión</h2>
      <form>
        <div>
          <label className="user">Usuario:</label>
          <input type="text" id="username"/>
        </div>
        <div>
          <label className="user">Contraseña:</label>
          <input type="password" id="password" />
        </div>
        <div className='boton'>
          <button>Ingresar</button>
        </div>
      </form>
  </div>
  </>
    );
}

export default Login; 
