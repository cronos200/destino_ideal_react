import "../CSS/reservas.css";
import BarraNavegacion from "../pages/BarraNavegacion";
const Reservas = () => {
  return (
    <dir>
      <div className="navegacion">
        <BarraNavegacion />
      </div>
      <div className="reservas">
        <section>
          <h2>Reserva tu Viaje</h2>
          <form>
            <input type="text" placeholder="Destino" required />
            <input type="date" required />
            <button type="submit">Reservar</button>
          </form>
        </section>
      </div>
    </dir>
  );
};

export default Reservas;
