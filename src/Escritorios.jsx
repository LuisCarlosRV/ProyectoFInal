import React from 'react';
import './Escritorios.css';

const EscritoriosSection = ({ title, images }) => {
  return (
    <section className="deskq-section">
      <h2>{title}</h2>
      <div className="images-container">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`escritorio ${index + 1}`} />
        ))}
      </div>
    </section>
  );
};

export default function Escritorios() {
  const escritorioImages1 = [
    '/escritorio1.jpg',
    '/escritorio2.jpg',
    '/escritorio3.jpg',
  ];

  const escritorioImages2 = [
    '/escritorio4.jpg',
    '/escritorio5.jpg',
    '/escritorio6.jpg',
  ];

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

      <h1 id="todos">Todos nuestros escritorios</h1>

      <EscritoriosSection title="" images={escritorioImages1} />
      <EscritoriosSection title="" images={escritorioImages2} />
      <EscritoriosSection title="" images={escritorioImages2} />
    </>
  );
}

