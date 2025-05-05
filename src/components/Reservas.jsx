import "../CSS/reservas.css";
const Reservas = () => {
    return (
        <div className="reservas">
            <section >
                <h2>Reserva tu Viaje</h2>
                <form>
                    <input type="text" placeholder="Destino" required />
                    <input type="date" required />
                    <button type="submit">Reservar</button>
                </form>
            </section>
        </div>
    );
};

export default Reservas;