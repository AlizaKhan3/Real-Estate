import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Properties from "../pages/Properties"
import Selling from "../pages/Selling"
import Dashboard from "../pages/Dashboard"
import ProtectedRoutes from "../pages/ProtectedRoutes"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/properties" element={<Properties />} />

                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />


                <Route element={<ProtectedRoutes />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/selling" element={<Selling />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router
