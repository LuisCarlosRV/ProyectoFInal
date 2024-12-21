import React from 'react';
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>Deskq</h1>
      </div>
      <nav className="navigation">
        <ul>
          <li><a href="/Inicio">Inicio</a></li>
          <li><a href="/Escritorios">Escritorios</a></li>
          <li><a href="/Accesorios">Accesorios</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header