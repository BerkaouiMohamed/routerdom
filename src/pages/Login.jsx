import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Login({setUser,user}) {
    const location=useLocation()
    console.log("🚀 ~ Login ~ location:", location)
    const oldpath=location?.state?.from||"/"


const navigate=useNavigate()
  return (
    <div>
      <button onClick={()=>{setUser(!user)
    
    navigate(oldpath)
    }}>user</button>
    </div>
  )
}

export default Login
