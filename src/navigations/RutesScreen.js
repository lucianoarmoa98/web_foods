import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ProtectedRoutes, ProtectedRoutesLogin } from "./Autorizador"
import ErrorPage from "../page/errorPage/ErrorPage"
import DashboardHome from "../page/dashboardHome/DashboardHome"
import SeriviciosPage from "../page/servicios/SeriviciosPage"
import ContactoPage from "../page/contacto/ContactoPage"
import ServicioDetailsPage from "../page/servicios/ServicioDetailsPage"


function RutesScreen() {

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route element={<ProtectedRoutesLogin />} >
         <Route path="/incentiva-ecommerce-web/login" element={<LoginScreen />} />
        </Route> */}

        {/* <Route element={<ProtectedRoutes />} >
          <Route path="/incentiva-ecommerce-web/admin" element={<DashboardAdmin />} />
        </Route> */}

        {/* <Route element={<ProtectedRoutes />}> */}
        <Route path="/" element={<DashboardHome />} />
        <Route path="/app/servicios" element={<SeriviciosPage />} />
        <Route path="/app/servicios/:id" element={<ServicioDetailsPage />} />
        <Route path="/app/contacto" element={<ContactoPage />} />
        {/* <Route path="/bienvenido" element={<InicioPage />} />
        <Route path="/incentiva-ecommerce-web/hombres" element={<DashboardHombres />} />
        <Route path="/incentiva-ecommerce-web/hombres/:detalles/:id" element={<CardDetails />} />
        <Route path="/incentiva-ecommerce-web/mujeres" element={<DashboardMujeres />} />
        <Route path="/incentiva-ecommerce-web/mujeres/:detalles/:id" element={<CardDetails />} />
        <Route path="/incentiva-ecommerce-web/carrito" element={<CarritoOrders />} />
        <Route path="/incentiva-ecommerce-web/login" element={<LoginScreen />} /> */}
        <Route path="*" element={<ErrorPage />} />
        {/* </Route> */}

      </Routes>
    </BrowserRouter>
  )
}

export default RutesScreen
