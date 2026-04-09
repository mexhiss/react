import { Navigate } from "react-router-dom"
import { Outlet } from "react-router-dom"
export default function ProtectedRoute({isLoggedIn}){
  if(!isLoggedIn) return <Navigate to={'/login'}/>
  return <Outlet/>
}