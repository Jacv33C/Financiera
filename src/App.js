import React, { useState } from "react";
import "./App.css";

function App() {
  const NUMERO_WSP = "529811016234"; // 🔴 TU NÚMERO CON LADA 52

  const [nombre, setNombre] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [deuda, setDeuda] = useState(100000);

  function enviarWhatsApp(e) {
    e.preventDefault();

    if (!nombre || !municipio) {
      alert("Por favor llena todos los campos");
      return;
    }

    const mensaje = `Hola, quiero una asesoría financiera.

Nombre: ${nombre}
Municipio: ${municipio}
Deuda aproximada: $${deuda.toLocaleString()} MXN`;

    const url = `https://wa.me/${NUMERO_WSP}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  }

  return (
    <div className="app">
      {/* HEADER */}
      <header>
        <h1>CONSULTORES MX</h1>
        <h3>Consultoría financiera</h3>
      </header>

      {/* PRESENTACIÓN */}
      <section className="presentacion">
        <p>
          Somos una <strong>consultoría financiera especializada</strong>, conformada por
          expertos asesores que <strong>negocian directamente con BBVA por ti</strong> para
          ayudarte a <strong>liquidar tus adeudos</strong> de forma legal y segura.
          <br /><br />
          Nuestro objetivo es que recuperes tu tranquilidad financiera obteniendo
          <strong> descuentos exclusivos</strong> y la posibilidad de
          <strong> liquidar hasta con solo el 30% del total de tu deuda</strong>.
        </p>
      </section>

      {/* SERVICIOS */}
      <section className="servicios">
        <h2>Servicios</h2>
        <ul>
          <li>✅ Quitas totales</li>
          <li>✅ Quitas a plazo</li>
          <li>✅ Cartas de no adeudo</li>
          <li>✅ Recuperación de Buró de crédito</li>
        </ul>
      </section>

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

          <select
            value={municipio}
            onChange={(e) => setMunicipio(e.target.value)}
          >
            <option value="">Selecciona tu municipio</option>
            <option value="Campeche">Campeche</option>
            <option value="Carmen">Carmen</option>
            <option value="Champotón">Champotón</option>
            <option value="Calkiní">Calkiní</option>
            <option value="Hecelchakán">Hecelchakán</option>
            <option value="Hopelchén">Hopelchén</option>
            <option value="Palizada">Palizada</option>
            <option value="Tenabo">Tenabo</option>
            <option value="Escárcega">Escárcega</option>
            <option value="Calakmul">Calakmul</option>
            <option value="Candelaria">Candelaria</option>
            <option value="Seybaplaya">Seybaplaya</option>
            <option value="Dzitbalché">Dzitbalché</option>
          </select>

          <label className="label-deuda">
            Monto aproximado de la deuda
          </label>

          <p className="monto">
            ${deuda.toLocaleString()} MXN
          </p>

          <input
            type="range"
            min="100000"
            max="1500000"
            step="50000"
            value={deuda}
            onChange={(e) => setDeuda(Number(e.target.value))}
          />

          <button type="submit">
            Solicitar asesoría
          </button>
        </form>
      </section>

      <footer>
        © 2025 CONSUL – Todos los derechos reservados
      </footer>
    </div>
  );
}

export default App;
