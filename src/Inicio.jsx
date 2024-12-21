import React from 'react';
import './Inicio.css'
import './Footer.css'
export default function Inicio() {
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
          <li><a href="#BestSeller">BestSeller</a></li>
          <li><a href="#Accesorios">Accesorios</a></li>
        </ul>
      </nav>
    </header>

    <section id="Escritoriosdeskq">
    <h1 id="desk">Escritorios Deskq</h1>
    <img src="/escritorio1.jpg" alt="" />
    <img src="/escritorio2.jpg" alt="" />
    <img src="/escritorio3.jpg" alt="" />
    <img src="/escritorio4.jpg" alt="" />
    <img src="/escritorio5.jpg" alt="" />
    <img src="/escritorio6.jpg" alt="" />
    </section>
    <section id="BestSeller">
    <h1 id="titulos">Best Seller</h1>
    <img src="/escritorio4.jpg" alt="" />
    <img src="/escritorio5.jpg" alt="" />
    <img src="/escritorio6.jpg" alt="" />
    </section>
    <section id="Accesorios">
    <h1 id="titulos">Accesorios</h1>
    <img src="/accesorio1.jpg" alt="" />
    <img src="/accesorio2.jpg" alt="" />
    <img src="/accesorio3.jpg" alt="" />
    <img src="/accesorio4.jpg" alt="" />
    <img src="/accesorio5.jpg" alt="" />
    <img src="/accesorio6.jpg" alt="" />
    </section>

    <footer className="footer">
        <div className="footer-content">
          <ul>
            <li><a href="">Inicio</a></li>
            <li><a href="">Terminos y condiciones</a></li>
            <li><a href="">Soporte</a></li>
            <li><a href="">Nosotros</a></li>
          </ul>
        </div>
      </footer>
    </>
  );
}
