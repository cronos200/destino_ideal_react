import BarraNavegacion from "./BarraNavegacion";
import "../pages/login.css";
import { Link } from "react-router-dom";

function Login() {
  
  return (
    <div>
      <div className="login">
        <BarraNavegacion />
      </div>
      <div className="login-background">
        <div className="login-container">
          <h2>Iniciar Sesión</h2>
          <form>
            <input type="email" placeholder="Correo electrónico" required />
            <input type="password" placeholder="Contraseña" required />
            <button type="submit">Ingresar</button>
            <Link to="/registro">Registrate</Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
