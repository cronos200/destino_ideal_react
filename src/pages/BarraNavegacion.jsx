import "../CSS/panelDeControl.css";
import logo from '../assets/logo.jpg'
function BarraNavegacion() {
  return (
    <aside className="panel-control-aside">
      <div>
        <img src={logo} alt="" />
        <h1>Destino ideal</h1>
      </div>
      <nav>
        <div className="botones">
          <button>Inicio de seccion</button>
        </div>
        <div className="botones">
          <button>Contactanos</button>
        </div>
        <div className="botones">
          <button>Quienes somos</button>
        </div>
      </nav>
    </aside>
  )
}
export default BarraNavegacion