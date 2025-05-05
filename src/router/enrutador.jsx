import QuienesSomos from "../components/QuienesSomos.jsx"
import Contactanos from "../components/Contactanos.jsx"
import Registro from "../pages/Registro.jsx"
import Login from "../pages/Login.jsx"
import Reservas from "../components/Reservas.jsx"

export let enrutador = [
    {
        path: '/',
        element: <QuienesSomos />
    },
    {
        path: '/contactanos',
        element: <Contactanos />
    },
    {
        path: '/registro',
        element: <Registro />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/reserva',
        element: <Reservas />
    }
]