import QuinesSomos from "./components/QuienesSomos";
import Registro from "./pages/Registro";

function PanelControl(){
    return(
        <div className="panel-control">
            <QuinesSomos />
            <Registro />
            <section className="panel-control-section">
            </section>
        </div>
    )
}
export default PanelControl;