import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ProtectedRoutes, ProtectedRoutesLogin } from "./Autorizador"
import ErrorPage from "../page/errorPage/ErrorPage"
import DashboardHome from "../page/dashboardHome/DashboardHome"
import SeriviciosPage from "../page/servicios/SeriviciosPage"
import ContactoPage from "../page/contacto/ContactoPage"
import ServicioDetailsPage from "../page/servicios/ServicioDetailsPage"
import MenuDetailsPage from "../page/dashboardHome/MenuDetailsPage"
import LoginPage from "../page/login/LoginPage"
import HomeAdminPage from "../page/admin/home/HomeAdminPage"
import BannersAdminPage from "../page/admin/home/BannersAdminPage"
import ProductosAdminPage from "../page/admin/home/ProductosAdminPage"


function RutesScreen() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoutes />} >
         <Route path="/app/admin" element={<HomeAdminPage />} />
         <Route path="/app/admin/banners" element={<BannersAdminPage />} />
         <Route path="/app/admin/productos" element={<ProductosAdminPage />} />
        </Route>

        {/* <Route element={<ProtectedRoutes />} >
          <Route path="/incentiva-ecommerce-web/admin" element={<DashboardAdmin />} />
        </Route> */}

        {/* <Route element={<ProtectedRoutes />}> */}
        <Route path="/" element={<DashboardHome />} />
        <Route path="/app/menu-detalle/:id" element={<MenuDetailsPage />} />
        <Route path="/app/servicios" element={<SeriviciosPage />} />
        <Route path="/app/servicios/:id" element={<ServicioDetailsPage />} />
        <Route path="/app/contacto" element={<ContactoPage />} />
         <Route path="/app/login" element={<LoginPage />} />

        {/* <Route path="/bienvenido" element={<InicioPage />} />
        <Route path="/incentiva-ecommerce-web/mujeres/:detalles/:id" element={<CardDetails />} />
        <Route path="/incentiva-ecommerce-web/carrito" element={<CarritoOrders />} />
        */}
        <Route path="*" element={<ErrorPage />} />
        {/* </Route> */}

      </Routes>
    </BrowserRouter>
  )
}

export default RutesScreen
