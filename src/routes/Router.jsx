import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Properties from "../pages/Properties"
import Selling from "../pages/Selling"
import Dashboard from "../pages/Dashboard"
import { ProtectedRoutesDashboard, ProtectedRoutesSell } from "../pages/ProtectedRoutes"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import Error from "../pages/Error"

const Router = () => {
    // const navigate = useNavigate()

    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                {/* <Route path="/properties" element={<Properties />} /> */}
                   <Route path="*" element={<Error />} />

                {/* //nested route */}
                <Route path="/purchase/*" element={<Sidebar />} />

                <Route element={<ProtectedRoutesDashboard />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                </Route>

                <Route element={<ProtectedRoutesSell />}>
                    <Route path="/selling" element={<Selling />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router
