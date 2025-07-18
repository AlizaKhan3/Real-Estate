import { Navigate, Outlet } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const ProtectedRoutes = () => {
    //data jwt mein store hei toh usey get karo
    const data = localStorage.getItem("token")
    console.log(data)
    const decoded = jwtDecode(data)
    const role = decoded.role

    return (
        role === "admin" ? <Outlet /> : <Navigate to="/properties" />
    )
}

export default ProtectedRoutes
