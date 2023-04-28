import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>REGISTRO DE ATENCIONES</h1>
      <form>
        <div className="form-group">
          <label htmlFor="paciente">PACIENTE N°</label>
          <input type="text" id="paciente" name="paciente" required />
        </div>
        <div className="form-group">
          <label htmlFor="nombres">Nombres:</label>
          <input type="text" id="nombres" name="nombres" required />
        </div>
        <div className="form-group">
          <label htmlFor="apellidos">Apellidos:</label>
          <input type="text" id="apellidos" name="apellidos" required />
        </div>
        <div className="form-group">
          <label htmlFor="fecha-nacimiento">Fecha de nacimiento:</label>
          <input
            type="date"
            id="fecha-nacimiento"
            name="fecha-nacimiento"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="edad">Edad:</label>
          <input type="number" id="edad" name="edad" required />
        </div>
        <div className="form-group">
          <label htmlFor="historia-clinica">N° Historia clínica:</label>
          <input
            type="text"
            id="historia-clinica"
            name="historia-clinica"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="sexo">Sexo:</label>
          <input
            type="radio"
            id="masculino"
            name="sexo"
            value="masculino"
            required
          />
          <label htmlFor="masculino">Masculino</label>
          <input
            type="radio"
            id="femenino"
            name="sexo"
            value="femenino"
            required
          />
          <label htmlFor="femenino">Femenino</label>
        </div>
        <div className="form-group">
          <label htmlFor="gestante">Gestante:</label>
          <input type="checkbox" id="gestante" name="gestante" />
        </div>
        <div className="form-group">
          <label htmlFor="direccion">Dirección:</label>
          <input type="text" id="direccion" name="direccion" required />
        </div>
        <div className="form-group">
          <label htmlFor="telefono">Teléfono:</label>
          <input type="tel" id="telefono" name="telefono" required />
        </div>
        <div className="form-group">
          <label htmlFor="fecha-cita">Fecha de próxima cita:</label>
          <input type="date" id="fecha-cita" name="fecha-cita" required />
        </div>
        <button type="submit">Enviar</button>
      </form>
      <footer className="footer">
        &copy; {new Date().getFullYear()} Derechos de autor - Desarrollado por
        C.D Carlo F. Cabos Zavaleta
      </footer>
    </div>
  );
}
