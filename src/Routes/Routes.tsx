import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { PrincipalWeb } from "../Pages/Public/PaginaWeb";
import { Login } from "../Pages/Public/Login";
import Dashboard from "../Pages/Admin/Dashboard/Dashboard";
import Admin from "../Pages/Admin/Admin";

const router = createBrowserRouter([
    {
        path: "/",
        element: <PrincipalWeb />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/dashboard",
        element: <Dashboard />
    }
])
export const routers = createBrowserRouter(
    createRoutesFromElements(
    <>
        <Route path="/" element={<PrincipalWeb />} />
        <Route path="login" element={<Login />} />
        <Route path="admin/" element={<Admin />}>
            <Route path="" element={<Dashboard/>}/>
            <Route path="dashboard" element={<Dashboard />} />
        </Route>
    </>
    )
)
export default router;