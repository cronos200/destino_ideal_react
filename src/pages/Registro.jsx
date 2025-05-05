import { useState } from "react";
import "../pages/registro.css";
import BarraNavegacion from "./BarraNavegacion";

function Registro() {
  const [DatosFormulario, setDatosFormulario] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    cedula: "",
    telefono: "",
    fechaNacimiento: "",
    nacionalidad: "",
    password: "",
    confirmarPassword: "",
  });

  const manejarCambio = (e) => {
    setDatosFormulario({ ...DatosFormulario, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (DatosFormulario.password !== DatosFormulario.confirmarPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
    alert(`Registro exitoso: ${DatosFormulario.nombre} ${DatosFormulario.apellido}`);
  };

  return (
    <div>
        <div className="registro"> 
            <BarraNavegacion />
        </div>
    <div className="registro-background">
      <div className="registro-container">
        <h2>Registro de Cliente</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            required
            className="registro-input"
            onChange={manejarCambio}
          />
          <input
            type="text"
            name="apellido"
            placeholder="Apellido"
            required
            className="registro-input"
            onChange={manejarCambio}
          />
          <input
            type="email"
            name="correo"
            placeholder="Correo electrónico"
            required
            className="registro-input"
            onChange={manejarCambio}
          />
          <input
            type="text"
            name="cedula"
            placeholder="Cédula"
            required
            className="registro-input"
            onChange={manejarCambio}
          />
          <input
            type="tel"
            name="telefono"
            placeholder="Teléfono"
            required
            className="registro-input"
            onChange={manejarCambio}
          />
          <input
            type="date"
            name="fechaNacimiento"
            required
            className="registro-input"
            onChange={manejarCambio}
          />
          <input
            type="text"
            name="nacionalidad"
            placeholder="Nacionalidad"
            required
            className="registro-input"
            onChange={manejarCambio}
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            required
            className="registro-input"
            onChange={manejarCambio}
          />
          <input
            type="password"
            name="confirmarPassword"
            placeholder="Confirmar contraseña"
            required
            className="registro-input"
            onChange={manejarCambio}
          />
          <button type="submit" className="registro-boton">
            Registrarse
          </button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Registro;
