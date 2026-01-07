import React, { useState } from "react";
import "./App.css";

function App() {
  const NUMERO_WSP = "529817513404";

  const [nombre, setNombre] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [deuda, setDeuda] = useState(5000);

  /* ===== IMÁGENES ===== */
  const imagenes = [
    "/img/Enero1.jpeg",
    "/img/Enero2.jpeg",
    "/img/Enero3.jpeg",
    "/img/Enero4.jpeg",
  ];

  const [indice, setIndice] = useState(1);

  const anterior = () => {
    setIndice((prev) => (prev === 0 ? imagenes.length - 1 : prev - 1));
  };

  const siguiente = () => {
    setIndice((prev) => (prev === imagenes.length - 1 ? 0 : prev + 1));
  };

  function enviarWhatsApp(e) {
    e.preventDefault();

    if (!nombre || !municipio) {
      alert("Por favor llena todos los campos");
      return;
    }

    const mensaje = `Hola,me interesa negociar mi adeudo con BBVA

Nombre: ${nombre}
Municipio: ${municipio}
Deuda aproximada: $${deuda.toLocaleString()} MXN`;

    window.open(
      `https://wa.me/${NUMERO_WSP}?text=${encodeURIComponent(mensaje)}`,
      "_blank"
    );
  }

  return (
    <div className="app">
      <header>
        <h1>CONSULTORES MX</h1>
        <h3>Consultoría financiera</h3>
       
      </header>

      <section className="presentacion">
        <p>
         Somos una <strong>consultoría financiera especializada</strong> integrada por
  <strong> asesores profesionales</strong> que gestionan <strong> negociaciones directas con BBVA </strong>
  para apoyar a nuestros clientes en la <strong>liquidación legal y segura de sus adeudos</strong>.
  
  Nuestro objetivo es brindarte <strong>soluciones financieras efectivas</strong>,
  permitiéndote acceder a <strong>descuentos preferenciales</strong> y a esquemas de
  pago que pueden <strong>reducir tu deuda hasta en un 70%</strong>.
        </p>
      </section>

    {/* ===== CARRUSEL LATERAL REAL ===== */}
<section className="carousel">
  <button className="arrow left" onClick={anterior}>‹</button>

 <div className="carousel-track">
  {imagenes.map((img, i) => {
    const offset = i - indice;

    return (
      <img
        key={i}
        src={img}
        alt="banner"
        className="slide"
        style={{
          transform: `translateX(${offset * 280}px) scale(${offset === 0 ? 1.2 : 0.9})`,
          opacity: offset === 0 ? 1 : 0.45,
          zIndex: offset === 0 ? 3 : 1,
          filter: offset === 0 ? "none" : "blur(1px)"
        }}
      />
    );
  })}
</div>





  <button className="arrow right" onClick={siguiente}>›</button>
</section>

{/* ===== CÓMO FUNCIONA ===== */}
<section className="como-funciona">
  <h2>¿Cómo funciona nuestro programa?</h2>

  <div className="pasos-grid">
    <div className="paso-card">
      <div className="paso-icon">⚙️</div>
      <h4>Diagnóstico personalizado</h4>
      <p>
        Realizamos un diagnóstico de cada caso para determinar la mejor
        estrategia de negociación.
      </p>
    </div>

    <div className="paso-card">
      <div className="paso-icon">🧠</div>
      <h4>Plan según tu capacidad</h4>
      <p>
        Diseñamos un plan de pago basado en la capacidad financiera real
        del deudor.
      </p>
    </div>

    <div className="paso-card">
      <div className="paso-icon">📊</div>
      <h4>Negociación con acreedores</h4>
      <p>
        Negociamos con todos los acreedores hasta conseguir el mejor
        descuento posible.
      </p>
    </div>

    <div className="paso-card">
      <div className="paso-icon">👨‍👩‍👧</div>
      <h4>Liquidación y tranquilidad</h4>
      <p>
        Una vez logrado el mejor descuento, renegociamos y liquidamos
        la deuda para tu tranquilidad.
      </p>
    </div>
  </div>
</section>

     <section class="servicios">
  <h2>Servicios</h2>

  <div class="servicios-grid">
    <div class="servicio-card">
      <span class="icon">✔</span>
      <h4>Quitas totales</h4>
      <p>Liquidación definitiva de tu deuda con descuentos reales.</p>
    </div>

    <div class="servicio-card">
      <span class="icon">⏳</span>
      <h4>Quitas a plazo</h4>
      <p>Planes flexibles adaptados a tu capacidad de pago.</p>
    </div>

    <div class="servicio-card">
      <span class="icon">📄</span>
      <h4>Carta de no adeudo</h4>
      <p>Documento legal que respalda tu tranquilidad financiera.</p>
    </div>

    <div class="servicio-card">
      <span class="icon">📈</span>
      <h4>Recuperación de Buró</h4>
      <p>Mejora progresiva de tu historial crediticio.</p>
    </div>
  </div>
</section>

{/* FRASE DE IMPACTO */}
<div className="frase-impacto">
  <p>“Deuda cerrada, calma asegurada.”</p>
</div>


      {/* FORMULARIO */}
      <section className="formulario">
        <h2>Solicita tu asesoría</h2>

        <form onSubmit={enviarWhatsApp}>
          <input
            type="text"
            placeholder="Nombre completo"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />

          <select value={municipio} onChange={(e) => setMunicipio(e.target.value)}>
            <option value="">Selecciona tu municipio</option>
            <option value="Campeche">Campeche</option>
            <option value="Calkini">Calkini</option>
            <option value="Tenabo">Tenabo</option>
            <option value="Pomuch">Pomuch</option>
            <option value="Champoton">Champoton</option>
            <option value="Hopelchen">Hopelchen</option>
          </select>

          <p>${deuda.toLocaleString()} MXN</p>

          <input
            type="range"
            min="5000"
            max="500000"
            step="5000"
            value={deuda}
            onChange={(e) => setDeuda(Number(e.target.value))}
          />

          <button type="submit">Solicitar asesoría</button>
        </form>
      </section>

      <footer>© 2025 CONSUL</footer>
    </div>
  );
}

export default App;
