import "../components/quienesSomos.css";
import imagen from "../assets/mision.jpg";
import imagen2 from "../assets/vision.jpg";
import BarraNavegacion from "../pages/BarraNavegacion";

function QuinesSomos() {
  return (
    <div className="quienes-somos-container">
      <div>
        <BarraNavegacion />
      </div>
      <h1 className="titulo">¿Quiénes somos?</h1>
      <p className="descripcion">
        En <strong>Destino Ideal</strong>, somos más que una agencia de viajes;
        somos tus socios en la aventura de explorar el mundo. Con una pasión
        arraigada por los viajes y el deseo de crear experiencias inolvidables,
        nuestro equipo se dedica a ofrecerte las mejores opciones para que cada
        viaje sea único y especial.
      </p>

      <div className="mision">
        <div className="texto-mision">
          <h2 className="titulo">Misión</h2>
          <p>
            Nuestra misión es proporcionar a nuestros clientes experiencias de
            viaje excepcionales y personalizadas, asegurando que cada detalle
            esté cuidadosamente planificado. Nos comprometemos a ofrecer un
            servicio de alta calidad, con atención al cliente inigualable, para
            que cada uno de nuestros viajeros viva momentos inolvidables.
          </p>
        </div>
        <div className="imagen-mision">
          <img src={imagen} alt="mapa de paises asiaticos y africanos" />
        </div>
      </div>

      <div className="espaciador"></div>

      <div className="vision">
        <div className="imagen-vision">
          <img src={imagen2} alt="mapa con diferentes fotografias" />
        </div>
        <div className="texto-vision">
          <h2 className="titulo">Visión</h2>
          <p>
            Aspiramos a ser la agencia de viajes líder en el mercado, reconocida
            por nuestra innovación y dedicación a la satisfacción del cliente.
            Queremos inspirar a las personas a explorar el mundo, promoviendo un
            turismo responsable y sostenible, y convirtiendo cada viaje en una
            historia que merezca ser contada.
          </p>
        </div>
      </div>
    </div>
  );
}

export default QuinesSomos;
