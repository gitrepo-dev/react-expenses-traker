import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRouter() {
  // @ts-ignore
  const token = (localStorage.getItem('user_agent') !== 'undefined' && localStorage.getItem('user_agent') !== null) ? JSON.parse(localStorage.getItem('user_agent')).token : false
  return token ? <Outlet /> : <Navigate to={`/`} />
}