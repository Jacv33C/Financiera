
import './App.css';

function App() {
  const empresa = {
    nombre: "CONSULTORES MX",
    nombreCorto: "CONSUL",
    giro: "Consultoría financiera"
  };

  const presentacion = "Somos una consultoría financiera conformada por expertos asesores que te ayudaremos a solucionar tus adeudos con BBVA, obteniendo grandes beneficios.";

  const servicios = [
    "Quitas totales",
    "Quitas a plazo",
    "Cartas de no adeudo",
    "Recuperación de buró de crédito"
  ];

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      
      {/* ENCABEZADO */}
      <header>
        <h1>{empresa.nombre}</h1>
        <h3>{empresa.giro}</h3>
      </header>

      {/* PRESENTACIÓN */}
      <section>
        <p>{presentacion}</p>
      </section>

      {/* SERVICIOS */}
      <section>
        <h2>Servicios</h2>
        <ul>
          {servicios.map((servicio, index) => (
            <li key={index}>✅ {servicio}</li>
          ))}
        </ul>
      </section>

      {/* FORMULARIO */}
      <section>
        <h2>Solicita asesoría</h2>

        <form>
          <input type="text" placeholder="Nombre completo" /><br /><br />
          <input type="tel" placeholder="Teléfono" /><br /><br />
          <input type="email" placeholder="Correo electrónico" /><br /><br />

          <select>
            <option>Selecciona tu situación</option>
            <option>Adeudo con BBVA</option>
            <option>Buró de crédito</option>
            <option>Otro</option>
          </select><br /><br />

          <textarea placeholder="Describe tu caso"></textarea><br /><br />

          <button type="button">Enviar</button>
        </form>
      </section>

      {/* PIE DE PÁGINA */}
      <footer style={{ marginTop: "30px", fontSize: "12px" }}>
        <p>© 2025 {empresa.nombreCorto} - Todos los derechos reservados</p>
      </footer>

    </div>
  );
}

export default App;

