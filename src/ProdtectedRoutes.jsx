import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

function ProdtectedRoutes({user}) {
  const location=useLocation()
  return (
  user?<Outlet/>:<Navigate state={{from:location.pathname}} to={'/login'}/>
  )
}

export default ProdtectedRoutes
