import BarraNavegacion from "../pages/BarraNavegacion";
import "./Contactanos.css";

const Contactanos = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="barraNavegacion">
        <BarraNavegacion />
      </div>
      <div className="contactanos-wrapper">
        <div className="contactanos">
          <h1>Contáctanos</h1>
          <div className="contactanos-container">
            <div className="contactanos-info">
              <div className="info-contact">
                <i className="fas fa-user-circle icon"></i>
                <h2>Información de Contacto</h2>
                <p>
                  <i className="fas fa-envelope"></i>
                  DestinoIdeal@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone"></i>
                  604 4563788
                </p>
              </div>
            </div>
            <div className="contactanos-form">
              <h2>Envía tu Mensaje</h2>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="nombre"
                  placeholder="Nombres"
                  required
                />
                <input
                  type="email"
                  name="correo"
                  placeholder="Correo Electrónico"
                  required
                />
                <textarea name="mensaje" placeholder="Mensaje" required />
                <button type="submit">Enviar Mensaje</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactanos;
