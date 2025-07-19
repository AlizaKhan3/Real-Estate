import { Navigate, Outlet } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export const ProtectedRoutesDashboard = () => {
    //data jwt mein store hei toh usey get karo -- dashboard check
    const data = localStorage.getItem("token")
    console.log(data)
    const decoded = jwtDecode(data)
    const token = decoded.token

    return (
        token ? <Outlet /> : <Navigate to="/properties" />
    )
}




export const ProtectedRoutesSell = () => {
    //data jwt mein store hei toh usey get karo -- dashboard check
    const data = localStorage.getItem("token")
    // console.log(data)
    // const decoded = jwtDecode(data)
    // const token = decoded.token
    //selling check -- user must be registered -- token ho us k ps

    return (
        data ? <Outlet /> : <Navigate to="/register" />

    )
}