import QuinesSomos from "./components/QuienesSomos";
import Registro from "./pages/Registro";
import Contactanos from "./components/Contactanos";

function PanelControl(){
    return(
        <div className="panel-control">
            <QuinesSomos />
            <Registro />
            <Contactanos />
            <section className="panel-control-section">
            </section>
        </div>
    )
}
export default PanelControl;