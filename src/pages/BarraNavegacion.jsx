import "../CSS/barraNavegacion.css";
import logo from '../assets/logo.jpg'
import { useNavigate } from "react-router-dom";
function BarraNavegacion() {

  const navegacion = useNavigate()

  return (
    <aside className="panel-control-aside">
      <div>
        <img src={logo} alt="" onClick={()=> navegacion('/')} />
        <h1>Destino ideal</h1>
      </div>
      <nav>
        <div className="botones">
          <button onClick={()=> navegacion('/login')}>Inicio de seccion</button>
        </div>
        <div className="botones">
          <button onClick={()=> navegacion('/contactanos')}>Contactanos</button>
        </div>
        {/* <div className="botones">
          <button>Destino</button>
          </div> */}
          <div className="botones">
            <button onClick={()=> navegacion('/reserva')}>Reserva</button>
          </div>
      </nav>
    </aside>
  )
}
export default BarraNavegacion